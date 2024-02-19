import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import LoginModal from "./Components/Login";
import { MyGrid } from "./Components/Grid";
import About from "./Pages/About";
import Home from "./Pages/Home";
import { AuthProvider } from "./hooks/useUser";

// import Footer from "./Footer";
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Router>
      <AuthProvider>
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
        </Routes>
        <LoginModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </AuthProvider>
    </Router>
  );
}

export default App;
