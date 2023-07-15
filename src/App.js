import "./App.css";
import Skeleton from "./pages/Skeleton";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Blogs from "./pages/Blogs";
import Admin from "./pages/Admin";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Skeleton />}>
            <Route path="home" element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="admin" element={<Admin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
