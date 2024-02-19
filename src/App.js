import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MyGrid } from "./Components/Grid";
import Home from "./Home";
import Navbar from "./Components/Navbar";
import LoginModal from "./Components/Login";

// import Footer from "./Footer";
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Router>
      <Navbar setIsModalOpen={setIsModalOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <>
              <MyGrid />
            </>
          }
        />
      </Routes>
      <LoginModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </Router>
  );
}

export default App;
