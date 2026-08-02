import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import DataExplorerPage from "./pages/DataExplorerPage";
import YolandaHousingPage from "./pages/visualizations/YolandaHousingPage";
import ElectoralMapPage from "./pages/visualizations/ElectoralMapPage";
import { LanguageProvider } from "./context/LanguageContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/explore/:category" element={<DataExplorerPage />} />
          <Route path="/visualization/yolanda-housing" element={<YolandaHousingPage />} />
          <Route path="/visualization/electoral-map" element={<ElectoralMapPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  </React.StrictMode>
);