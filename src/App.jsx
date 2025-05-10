import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/footer/Footer'; // وارد کردن فوتر

// Layout Components

 import Header from "./components/hader/Header";

// Pages
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />

        <main style={{ minHeight: "80vh" }}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        
       <Footer />
      </div>
    </Router>
  );
}

export default App;
