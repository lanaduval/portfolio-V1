import bgImg from "../assets/ImgProjets/bgInfo.jpg"
import Socials from '../Components/Socials';
export default function Info() {

    return (
     
        <div className="info">
    <div className="infoCard">
    <p>
    <h1>Bonjour, <br/>
        Lana Duval, développeuse web,</h1>
        Je suis passionnée par le domaine des <span className='Remboy'>arts visuels</span>, j'ai été diplômée des Beaux-Arts en 2015.<br/>
        Mais ce qui m'a conduit vers le développement web c'est mon apprentissage de la <span className='Remboy'>peinture digitale</span> en auto-didacte.<br/>
        <br/>

       J'ai suivi une formation de développeur <span className='Remboy'>full-stack </span>en 2022 à la <span className='Remboy'>Wild Code School.</span><br/>
        Je suis sensible au développement <span className='Remboy'>front-end : </span>
         aux expériences utilisateurs immersives, aux projets ayant un fort impact visuel.<br/>
        <br/>

        
       
    


        </p>
  <img src={bgImg} alt="decoration" />

    <Socials/>
    </div>
    </div>
)};

