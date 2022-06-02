import './App.css';
import Landing from "./pages/Landing";
import Crew from "./pages/Crew";
import FAQ from "./pages/FAQ";
import Map from "./pages/Map";

function App() {
  return (
      <div className='App'>
        <Landing />
        <Map />
        <Crew />
        <FAQ />
      </div>

  );
}

export default App;
