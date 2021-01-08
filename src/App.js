import "./App.css";
//import pages
import { Home } from "./pages/Home";
import React, { useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { loadSubreddit } from "./actions/subredditAction";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSubreddit());
  });

  return <div className="App">{/* <Home /> */}</div>;
}

export default App;
