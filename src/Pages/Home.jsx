import SceneBas from "../Components/3D/SceneBas";
import SceneHaut from"../Components/3D/SceneHaut";
import "../style.scss";

export default function Home() {
    return (
        <div>
<SceneHaut className="sceneHaut" />
<SceneBas className="sceneBas" />
 </div>

 );
}