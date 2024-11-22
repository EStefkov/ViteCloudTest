import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
   <div className="font-sans">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
    </>
  );
};

export default App;
