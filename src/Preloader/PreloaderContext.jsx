import { createContext, useContext, useState } from "react";

const PreloaderContext = createContext();

export const usePreloader = () => useContext(PreloaderContext);

export const PreloaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  return (
    <PreloaderContext.Provider value={{ loading, startLoading, stopLoading }}>
      {children}
    </PreloaderContext.Provider>
  );
};