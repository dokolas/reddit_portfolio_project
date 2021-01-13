import "./App.css";
//import pages
import { Home } from "./pages/Home";
import React, { useEffect } from "react";
import Nav from "./components/Nav";
import GlobalStyles from "./components/GlobalStyles";
function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Home />
    </div>
  );
}

export default App;
