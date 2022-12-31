export default function Info() {

    const projets = [{
        name: "Grosso Modo",
        img:require("../assets/ImgProjets/GrossoModo.png"),
        description: "Les meilleurs pâtes de Paris !",
        type: " Site vitrine",
        techno:"#HTML #CSS #javascript",
        url:"https://wildcodeschool.github.io/2022-09-JS-RemoteFR-LesCrewStillants-P1-Restaurant/"
    },{
        name: "Find you dream",
    img:require("../assets/ImgProjets/ToastyMoodWeb.png"),
    description: "Trouvez votre destination idéale !",
    type: " Site web de voyage, concept réalisé durant un Hackaton de 36h à la WCS, prix pour l'UX.",
    techno:"#javascript #react #APIrest #sass",
    url:"/404"
    },{
        name: "Toasty Mood",
        img:require("../assets/ImgProjets/ToastyMoodWeb.png"),
        description: "La météo influe t-elle sur votre humeur ?",
        type: " Web App de journaling",
        techno:"#javascript #react #APIrest",
        url:"https://toasty-mood.netlify.app/"

    }
    ]

    return (
    <div className="project">
        {projets.reverse().map((projet, index)=>(
        <div key={index} className="projectCard">
            <h1 >{projet.name}</h1>
            <img src={projet.img} alt="aperçu du site"/>
            <h2>{projet.description} </h2>
            <p>{projet.type} <br/> {projet.techno} </p>
            <a className="link" target="_blank" rel="noreferrer" href={projet.url} > site </a>
        
            </div>
        ))}

    </div>

   
)};