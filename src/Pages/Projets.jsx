export default function Info() {

    const projets = [{
        name: "Grosso Modo",
        url :require("../assets/ImgProjets/ToastyMoodWeb.png"),
        description: "Site vitrine pour un restaurateur parisien",
    },{
        name: "Find you dream",
    url :require("../assets/ImgProjets/ToastyMoodWeb.png"),
    description: "Hackaton de 36h",
    },{
        name: "Toasty Mood",
        url :require("../assets/ImgProjets/ToastyMoodWeb.png"),
        description: "Web app pour comparer son humeur et la météo",
    }
    ]

    return (
    <div className="project">
        {projets.reverse().map((projet, index)=>(
        <div key={index} className="projectCard">
            <h2 >{projet.name}</h2>
            <img src={projet.url} alt="aperçu du site"/>
            <a className="link" target="_blank" rel="noreferrer" href={projet.url} > site </a>
            <p>{projet.description}</p>
            </div>
        ))}

    </div>

   
)};