import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import ComingPage from "./routes/ComingPage";
import PlayingPage from "./routes/PlayingPage";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/now-playing/:movieId" element={<PlayingPage />} />
          <Route path="/now-playing" element={<PlayingPage />} />
          <Route path="/coming-soon/:movieId" element={<ComingPage />} />
          <Route path="/coming-soon" element={<ComingPage />} />
          <Route path="/:movieId" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
