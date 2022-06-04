import './App.css';
import Landing from "./pages/Landing";
import Crew from "./pages/Crew";
import FAQ from "./pages/FAQ";
import Map from "./pages/Map";
import Lore from "./pages/Lore";

function App() {
  return (
      <div className='App'>
        <Landing />
        <Lore />
        <Map />
        <Crew />
        <FAQ />
      </div>

  );
}

export default App;
