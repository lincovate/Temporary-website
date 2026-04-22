import { useNavigate } from "react-router-dom";
import { usePreloader } from "./PreloaderContext";

export const useNavigateWithPreloader = () => {
  const navigate = useNavigate();
  const { startLoading, stopLoading } = usePreloader();

  return (path, options = {}) => {
    const isMain = path === "/"; // define your "main link"

    startLoading();

    const duration = isMain ? 3000 : 500;

    setTimeout(() => {
      navigate(path, options);
    }, duration);

    setTimeout(() => {
      stopLoading();
    }, duration + 200);
  };
};