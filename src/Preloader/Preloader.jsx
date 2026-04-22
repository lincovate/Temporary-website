import { usePreloader } from "./PreloaderContext";
import "./preloader.css";

export default function Preloader() {
  const { loading } = usePreloader();

  if (!loading) return null;

  return (
    <div className="preloader-overlay">
      <div className="chain">
        <div className="link red"></div>
        <div className="link green"></div>
        <div className="link orange"></div>
        <div className="link teal"></div>
      </div>

      <p>Lincovate loading...</p>
    </div>
  );
}