import React from "react";
import "./App.css";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <main className="form-signin w-100 m-auto">
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/login" Component={Login} />
            
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
