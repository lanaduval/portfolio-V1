import "../style.scss";
import { NavLink } from "react-router-dom";
export default function Nav() {
    return (
<div className ="nav">
    <ul>
    <NavLink className="link" to="/"> <li> Home </li></NavLink>
    <NavLink className="link" to="/projets"> <li> Projets </li></NavLink>
    <NavLink className="link" to="/info"><li > A propos </li></NavLink>
    <NavLink className="link" to="/contact"><li> Contact </li></NavLink>
</ul>
</div>
    );
}