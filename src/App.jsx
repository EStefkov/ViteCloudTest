import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import "./App.css"

function App() {
  return (
    <Router>
      <div className="app">


          {/* Хедър секция с изображение и текст */}
          <div className="header">
          <img src="./images/1338701.png" alt="Profile" height={200}/>
          <h1>Emiliyan Stefkov</h1>
        </div>

        <nav>
          <Link to="/">Начало</Link>
          <Link to="/projects">Проекти</Link>
          <Link to="/contact">Контакти</Link>
        </nav>

      

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <About />
      </div>
    </Router>
  );
}

export default App;
