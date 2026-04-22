import React from "react";

const videos = [
  "Y5a5rKPo-XE",
  "TeYm9RtodLU",
  "rGDp77VbX1M",
  "3Esk1QzcibA",
  "EN0My_eREIU",
  "hLMMyq8S-N4",
  "GMsxs2PcUpk",
  "yux96QOd_64",
  "GLcavLQCJwg",
  "6GmolnDN2kU?",
  "ztdGpnpkf2E",

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
      <a href="#Websites" className="btn">Checkout the Website</a>
    </div>
    
  );
}

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
  title: {
    marginBottom: "40px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
    gap: "25px",
  },
  card: {
    width: "100%",
  },
  iframe: {
    width: "100%",
    height: "300px",
    borderRadius:"15px",
  },
};

export default Videos;