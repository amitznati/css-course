import React from "react";
import NavBar from "./layout/NavBar";
import Header from "./layout/Header";
import Sections from "./layout/sections";
import Footer from "./layout/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <main>
        <Sections />
      </main>
      <Footer />
    </div>
  );
}

export default App;
