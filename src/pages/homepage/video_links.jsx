import React, { useEffect, useRef, useState } from "react";

const videos = [
  "/assets/April1.mp4",
  "/assets/Lincovate.mp4",
];

function VideoLinks() {
  const videoRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.volume = 0.03; // 3% volume on load

      // Try autoplay
      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay might fail if not muted
          video.muted = true;
          video.play();
        });
      }
    }
  }, [currentIndex]);

  const handleEnded = () => {
    const nextIndex = (currentIndex + 1) % videos.length;
    setCurrentIndex(nextIndex);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Featured Videos</h2>

      <video
        ref={videoRef}
        width="100%"
        height="500"
        controls
        autoPlay
        onEnded={handleEnded}
        key={currentIndex} // forces reload when video changes
      >
        <source src={videos[currentIndex]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoLinks;