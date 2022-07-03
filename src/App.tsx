import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Crew from "./pages/Crew";
import FAQ from "./pages/FAQ";
import Map from "./pages/Map";
import Lore from "./pages/Lore";
import Footer from "./pages/Footer";
import NavBar from './components/NavBar';
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";


function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={
            <div>
              <div style={{ position: "absolute" }}>
                <NavBar />
              </div>
              <div id="landing">
                <Landing />
              </div>
              <div id="lore">
                <Lore />
              </div>
              <div id="map">
                <Map />
              </div>
              <div id="crew">
                <Crew />
              </div>
              <div id="faq">
                <FAQ />
              </div>
              <div id="social">
                <Footer />
              </div>
            </div>
          } />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
