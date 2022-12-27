import Nav from "./Nav";
import "../style.scss";
import Welcome from "../Pages/Welcome";

export default function Header() {
    return (
<div className="header">
<Welcome />
<Nav />
</div>
    )
};