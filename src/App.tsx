import './App.css';
import Landing from "./pages/Landing";
import Crew from "./pages/Crew";
import FAQ from "./pages/FAQ";
import Map from "./pages/Map";
import Lore from "./pages/Lore";
import Footer from "./pages/Footer";
import NavBar from './components/NavBar';

function App() {

  return (
      <div className='App'>
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

  );
}

export default App;
