import './App.css';
import Landing from "./pages/Landing";
import Crew from "./pages/Crew";
import FAQ from "./pages/FAQ";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/crew" element={<Crew />}></Route>
          <Route path="/faq" element={<FAQ />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
