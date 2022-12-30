import SceneBas from "../Components/3D/SceneBas";
import SceneHaut from"../Components/3D/SceneHaut";
import NasaPicture from "../Components/NasaPicture";
import Welcome from "../Components/Welcome";
import "../style.scss";

export default function Home() {
    return (
        <div>
<Welcome />
            <NasaPicture/>
<SceneHaut className="sceneHaut" />
<SceneBas className="sceneBas" />
 </div>

 );
}