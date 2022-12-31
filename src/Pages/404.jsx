export default function Error404(){
    return(
        <div className="error">
            <h1>404, <br/> Oups, tu t'es perdu(e) dans l'espace !</h1>
            <p>
                <a className="link" href="/projets">Retourner à la page projets</a><br/>
                <a className="link" href="/projets">Retourner à la page home</a>
            </p>
            <iframe allow="fullscreen" title="Oups, tu t'es perdu(e) dans l'espace !"src="https://gifer.com/embed/3QAe"></iframe><p><a href="https://gifer.com">via GIFER</a></p>
        </div>


    );
}