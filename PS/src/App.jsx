import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Community from "./screens/community";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Community Page */}
        <Route path="/community" element={<Community />} />
      </Routes>
    </Router>
  );
}

export default App;