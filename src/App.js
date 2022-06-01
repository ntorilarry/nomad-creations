import "./App.css";
import Home from "./components/home";
import { Routes, Route } from "react-router-dom";
import Menu from "./components/menu";

import Uiux from './components/uiux';

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/menu" element={<Menu />}></Route>
      <Route path="/uiux" element={<Uiux />}></Route>
      </Routes>
    </div>
  );
}

export default App;
