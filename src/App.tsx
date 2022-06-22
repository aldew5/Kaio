import './App.css';
import Landing from "./pages/Landing";
import Crew from "./pages/Crew";
import FAQ from "./pages/FAQ";
import Map from "./pages/Map";
import Lore from "./pages/Lore";
import Footer from "./pages/Footer";

function App() {
  return (
      <div className='App'>
        <Landing />
        <Lore />
        <Map />
        <Crew />
        <FAQ />
        <Footer />
      </div>

  );
}

export default App;
