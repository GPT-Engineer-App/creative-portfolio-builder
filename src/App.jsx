import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Brand1 from "./pages/Brand1.jsx";
import Brand2 from "./pages/Brand2.jsx";
import Brand3 from "./pages/Brand3.jsx";
import Brand4 from "./pages/Brand4.jsx";
import Brand5 from "./pages/Brand5.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/brand1" element={<Brand1 />} />
        <Route exact path="/brand2" element={<Brand2 />} />
        <Route exact path="/brand3" element={<Brand3 />} />
        <Route exact path="/brand4" element={<Brand4 />} />
        <Route exact path="/brand5" element={<Brand5 />} />
      </Routes>
    </Router>
  );
}

export default App;