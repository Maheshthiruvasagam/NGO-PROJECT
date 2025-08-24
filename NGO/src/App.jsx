import React from "react";
import Nav from "./components/nav";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";

function App() {
  return (
    <div>
      <Nav />
      
      <main>
  <Home />
        <Aboutus />
        
       
      </main>
    </div>
  );
}

export default App;
