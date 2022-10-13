import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Contacto from "./components/Contacto";
import Inicio from "./components/Inicio";
import Nosotros from "./components/Nosotros";
import User from "./components/User";

function App() {
  return (
    <Router>
      <div className="container mt-2">
        <div className="btn-group">
          <NavLink
            to="/"
            className="btn btn-primary"
            style={({ isActive }) => ({ color: isActive ? "white" : "white" })}
          >
            Inicio
          </NavLink>
          <NavLink
            to="/nosotros"
            className="btn btn-primary"
            style={({ isActive }) => ({ color: isActive ? "white" : "white" })}
          >
            Nosotros
          </NavLink>
          <NavLink
            to="/contacto"
            className="btn btn-primary"
            style={({ isActive }) => ({ color: isActive ? "white" : "white" })}
          >
            Contacto
          </NavLink>
        </div>
        <hr />
        <Routes>
          <Route path="/nosotros/:id" element={<User />}></Route>
          <Route path="/" exact element={<Inicio />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="/nosotros" element={<Nosotros />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
