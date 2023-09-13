import { Link } from "react-router-dom";
import logoPorto from "../assets/img/logo-porto.png";

export default function Menu() {
  return (
    <nav className="menu">
      <Link to="/">
        <img className="logo-menu" src={logoPorto} alt="Logo da Porto" />
      </Link>

      <Link to="/membros" className="menu-item">
        Membros
      </Link>
    </nav>
);
}