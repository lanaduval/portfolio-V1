import SceneBas from "../Components/3D/SceneBas";
import SceneHaut from"../Components/3D/SceneHaut";
import Header from "../Components/Header";
import "../style.scss";

export default function Home() {
    return (
        <div>
               <Header/>
<SceneHaut className="sceneHaut" />
<SceneBas className="sceneBas" />
 </div>

 );
}