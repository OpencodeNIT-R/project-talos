import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import Test from "./components/Test.jsx";
import Home from "./pages/landing-page/Home.jsx";
import GallaryPage from "./pages/gallery/Gallery.jsx";
import Events from "./pages/events/Events.jsx";
import AchievementPage from "./pages/achievements/AchievementPage.jsx";
import TeamPage from "./pages/team/TeamPage.jsx";
import Applications from "./pages/applications/Applications.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="test" element={<Test />} />
          <Route path="gallery" element={<GallaryPage />} />
          <Route path="events" element={<Events />} />
          <Route path="achievements" element={<AchievementPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="applications" element={<Applications />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
