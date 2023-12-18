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
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const currentUserContext = createContext()
export const setCurrentUserContext = createContext()


function App() {
  const [currentUser, setCurrentUser] = useState(
    null
  )
  const handleMount = async () => {
    try {
      const { data } = await axios.get("/dj-rest-auth/user/")
      if (data) setCurrentUser(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    handleMount();
  }, []);

  return (
    <currentUserContext.Provider value={currentUser}>
      <setCurrentUserContext.Provider value={setCurrentUser}>
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
    </setCurrentUserContext.Provider>
    </currentUserContext.Provider>
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
