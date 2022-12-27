
export default function Info() {

    const projets = [{
        name: "Grosso Modo",
        image :"./public/logo_lana.png",
        description: "Site vitrine pour un restaurateur parisien",
    },{
        name: "Toasty Mood",
        image :"./ToastyMoodWeb.png",
        description: "Web app pour comparer son humeur et la météo",
    }
    ]

    return (
    <div className="project">
        {projets.reverse().map((projet)=>(
        <div className="projectCard">
            <h2>{projet.name}</h2>
            <img src={projet.image} alt ="aperçu du site"/>
            <p>{projet.description}</p>
            </div>
        ))}

    </div>
)};