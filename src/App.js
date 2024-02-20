import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import LoginModal from "./Components/Login";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import About from "./Pages/About";

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
              <About />
            </>
          }
        />
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
      <LoginModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </Router>
  );
}

export default App;
