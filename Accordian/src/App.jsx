
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import AccordianSinglePage from './component/accordian/accordianPage'
import AccordianMultiPage from './component/accordian/accordianPage1'
import './App.css'

function App() {
  return (
    <>
        <BrowserRouter>
            <div
                style={{
                    display: "flex",
                    background: "black",
                    padding: "5px 0 5px 5px",
                    fontSize: "20px",
                }}
            >
                <div style={{ margin: "10px" }}>
                    <NavLink
                        to="/accordianPage"
                        style={({ isActive }) => ({
                            color: isActive
                                ? "greenyellow"
                                : "white",
                        })}
                    >
                        Accordian Single Select
                    </NavLink>
                </div>
                <div style={{ margin: "10px" }}>
                    <NavLink
                        to="/accordianPage1"
                        style={({ isActive }) => ({
                            color: isActive
                                ? "greenyellow"
                                : "white",
                        })}
                    >
                        Accordian Multi Select
                    </NavLink>
                </div>
                
            </div>
            <Routes>
                <Route
                    exact
                    path="/accordianPage"
                    element={<AccordianSinglePage />}
                />
                <Route
                    exact
                    path="/accordianPage1"
                    element={<AccordianMultiPage />}
                />
            </Routes>
        </BrowserRouter>
    </>
);
}

export default App
