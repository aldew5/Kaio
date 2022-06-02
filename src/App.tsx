import './App.css';
import Landing from "./pages/Landing";
import Crew from "./pages/Crew";
import FAQ from "./pages/FAQ";
import Map from "./pages/Map";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

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
