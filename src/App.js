import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import LoginModal from "./Components/Login";
import Home from "./Pages/Home";
import Inbox from "./Pages/Inbox";
import About from "./Pages/About";
import Dashboard from "./Pages/Dashboard";
import Account from "./Pages/Account";
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
        <Route path="/account" element={<Account />}>
          <Route path="inbox" element={<Inbox />}></Route>
          <Route path="dashboard" element={<Dashboard />}></Route>
        </Route>
      </Routes>
      <LoginModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </Router>
  );
}

export default App;
