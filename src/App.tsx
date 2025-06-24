import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Layout from "./Layout";
import Content from "./pages/Content";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/content" element={<Content />} />
        </Route>
        
      </Routes>
    </Router>
  );
};

export default App;
