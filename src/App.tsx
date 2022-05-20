import './App.css';
import Landing from "./pages/Landing";
import Crew from "./pages/Crew";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/crew" element={<Crew />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
