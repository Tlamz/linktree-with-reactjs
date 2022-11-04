import "./App.css";
import React from "react";
import "./pages/Contact.page.js";
import { Home } from "./pages/Home.page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact.page.js";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
