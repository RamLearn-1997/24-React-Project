import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./component/navbar";
import Home from "./pages/home";
import Favorites from "./pages/favorites";
import Details from "./pages/details";

function App() {
  return (
    <>
      <div>
        <div className="min-h-screen p-6 bg-white text-grey-600 text-lg">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/recipe-item/:id" element={<Details />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
