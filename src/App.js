import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Invite from "./components/invite/Invite";
import Navbar from "./components/navbar/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Invite />} />
      </Routes>
    </Router>
  );
}

export default App;
