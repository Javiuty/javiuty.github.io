import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Info from "./components/Info";
import Projects from "./components/Projects";

const App = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <section>
          <About />
        </section>
        <section>
          <Projects />
        </section>
        <section>
          <Info />
        </section>
        <section>
          <Contact />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
