import React from "react";
import { HashLink } from 'react-router-hash-link';

function NotFound() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      color: "#fff",
      background: "#000",
      textAlign: "center",
      padding: "20px"
    }}>
      <h1>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <HashLink smooth to="/" style={{
        marginTop: "20px",
        padding: "10px 20px",
        background: "#00bfa6",
        color: "#fff",
        borderRadius: "8px",
        textDecoration: "none"
      }}>
        Go Home
      </HashLink>
    </div>
  );
}

export default NotFound;