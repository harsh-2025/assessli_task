import React from "react";
import ReactDOM from "react-dom/client";
import Cards from "./components/Cards.jsx";
import Contact from "./Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Contact />
    <Cards />
    <Footer />
  </React.StrictMode>
);
