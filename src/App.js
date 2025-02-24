import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Wishlist from "./components/wishlist/Wishlist";
import Invite from "./components/invite/Invite";
import "./App.css";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Invite />}  />
        <Route path="/gifts" element={<Wishlist />} />
      
      </Routes>
    </Router>
  );
}

export default App;
