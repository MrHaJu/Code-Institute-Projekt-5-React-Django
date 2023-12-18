import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Recepies from "./pages/Recipes";
import Settings from "./pages/Settings";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Footer from "./components/Footer";
import './api/axiosDefaults'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container main">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/recipes" element={<Recepies />} />
          <Route exact path="/settings" element={<Settings />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
           {/* Fallback for unknown Routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

// Fallback-component for unknown Routes
function NotFound() {
  return (
    <div>
      <h2>404 - Page not found</h2>
      <p>The requested page does not exist.</p>
    </div>
  );
}

export default App;
