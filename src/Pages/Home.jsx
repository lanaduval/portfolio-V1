import SceneBas from "../Components/3D/SceneBas";
import SceneHaut from"../Components/3D/SceneHaut";
import Welcome from "../Components/Welcome";
import "../style.scss";

export default function Home() {
    return (
        <div>
<Welcome />
<SceneHaut className="sceneHaut" />
<SceneBas className="sceneBas" />
 </div>

 );
}