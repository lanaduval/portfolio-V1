import "../style.scss";
import { NavLink } from "react-router-dom";
export default function Nav() {
    return (
<div className ="nav">
    <ul>
    <NavLink className="link" to="/"> <li className="homeButton"> Home </li></NavLink>
    <NavLink className="link" to="/projets"> <li className="projetsWebButton"> Projets Web </li></NavLink>
    <NavLink className="link" to="/info"><li className="infoButton" > A propos </li></NavLink>
    <NavLink className="link" to="/contact"><li className="contactButton" > Contact </li></NavLink>
</ul>
</div>
    );
}