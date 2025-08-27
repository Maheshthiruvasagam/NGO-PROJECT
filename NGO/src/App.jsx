import React from "react";
import Nav from "./components/nav";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import OurFocus from "./components/OurFocus";
import Impact from "./components/Impact";
import Involved from "./components/Involved";

function App() {
  return (
    <div>
      <Nav />
      
      <main>
        <Home />
        <Aboutus />
        <OurFocus />
        <Impact />
        <Involved />
      </main>
    </div>
  );
}

export default App;
