// src/App.tsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Message from "./components/Message";
import About from "./components/About";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" Component={Home} />
        <Route path="/message" Component={Message} />
        <Route path="/about" Component={About} />
        <Route path="*" Component={NotFound}/>
      </Routes>
    </Router>
  );
}

export default App;
