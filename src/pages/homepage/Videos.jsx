import React from "react";

const videos = [
  "Y5a5rKPo-XE",
  "TeYm9RtodLU",
  "rGDp77VbX1M",
];

function Videos() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Video Templates</h1>

      <div style={styles.grid}>
        {videos.map((id, index) => (
          <div key={index} style={styles.card}>
            <iframe
              src={`https://www.youtube.com/embed/${id}`}
              title={`Video ${index + 1}`}
              style={styles.iframe}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
  },
  card: {
    width: "100%",
  },
  iframe: {
    width: "100%",
    height: "200px",
    borderRadius: "10px",
  },
};

export default Videos;