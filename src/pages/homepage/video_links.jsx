import React, { useEffect, useRef, useState } from "react";

const videos = [
  "iYtVTzb0f9Y",
  "2L39R_QxU6A",
];

function VideoLinks() {
  const playerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [muted, setMuted] = useState(true); // track mute state
  const [isPlaying, setIsPlaying] = useState(false); // track if video is playing
  const [hasVideo, setHasVideo] = useState(false); // track if video is loaded

  useEffect(() => {
    // Load YouTube Iframe API
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("player", {
        height: "400",
        width: "100%",
        videoId: videos[0],
        playerVars: {
          autoplay: 1,
          mute: 1, // start muted for autoplay
          controls: 1,
        },
        events: {
          onReady: (event) => {
            event.target.setVolume(20); // initial 20%
            setHasVideo(true); // video loaded
          },
          onStateChange: handleStateChange,
        },
      });
    };
  }, []);

  const handleStateChange = (event) => {
    const playerState = event.data;
    // Track playing / ended state
    if (playerState === window.YT.PlayerState.PLAYING) {
      setIsPlaying(true);
    } else if (playerState === window.YT.PlayerState.ENDED) {
      setIsPlaying(false);
      const nextIndex = (currentIndex + 1) % videos.length;
      setCurrentIndex(nextIndex);
      playerRef.current.loadVideoById(videos[nextIndex]);
      if (muted) {
        playerRef.current.mute(); // keep muted if not unmuted yet
      }
    } else if (playerState === window.YT.PlayerState.PAUSED) {
      setIsPlaying(false);
    }
  };

  const handleUnmute = () => {
    if (playerRef.current) {
      playerRef.current.unMute();
      playerRef.current.setVolume(20); // start at 20%
      setMuted(false);
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Featured Videos</h2>

      <div id="player" style={{ margin: "20px 0" }}></div>

      {/* Show button only if video exists, is muted, and is playing */}
      {hasVideo && muted && isPlaying && (
        <button
          onClick={handleUnmute}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            borderRadius: "8px",
            backgroundColor: "#ff0000",
            color: "#fff",
            border: "none",
          }}
        >
          Press to Unmute
        </button>
      )}
    </div>
  );
}

export default VideoLinks;