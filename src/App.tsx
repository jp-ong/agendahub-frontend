import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { HomePage } from "@pages/home.page";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
