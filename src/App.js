import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import './App.css';
import { ArtistListPage } from "./ArtistListPage";
import { ArtistSinglePage } from "./ArtistSinglePage";
import { ArtistCreatePage } from "./ArtistCreatePage";
import { ArtistModPage } from "./ArtistModPage";
import { ArtistDeletePage } from "./ArtistDeletePage";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
           <NavLink to={`/`} className="nav-link">
              <span className="nav-link">Előadók</span>
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink to={`/uj-eloado`} className="nav-link">
              <span className="nav-link">Új előadó</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
          <Route path="/" element={<ArtistListPage />} />
          <Route path="/eloado/:eloadoId" element={<IArtistSinglePage />} />
          <Route path="uj-eloado" element={<ArtistCreatePage />} />
          <Route path="mod-eloado/:eloadoId" element={<ArtistModPage />} />
          <Route path="del-eloado/:eloadoId" element={<ArtistDeletePage />} />
      </Routes>
    </Router>
  );
}

export default App;
