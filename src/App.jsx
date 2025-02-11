import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Category from "./Components/sharedcomponents/Category";
import "./Styles/style.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Category category="India" query="India" />}
          />
          <Route
            path="/sports"
            element={<Category category="Sports" query="Sports" />}
          />
          <Route
            path="/technology"
            element={<Category category="Technology" query="Technology" />}
          />
          <Route
            path="/bussiness"
            element={<Category category="Bussiness" query="Bussiness" />}
          />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
