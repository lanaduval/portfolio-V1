import axios from "axios";
import {useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

export default function NasaPicture(){

    const API_NASA_KEY = process.env.REACT_APP_YOUR_NASA_API_KEY;
    const API_NASA = `https://api.nasa.gov/planetary/apod?api_key=${API_NASA_KEY}`
    ;
    const [nasa, setNasa] = useState([]);
  
  useEffect(() => {
    axios
      .get(API_NASA)
      .then((res) => {
        setNasa(res.data);
      })
      .catch((err) => console.error(err));
  }, [API_NASA]);
  

return (
   <>
    <img className="nasaAPOD"  src={nasa.url} alt="Astronomic Photography Of the Day" />
    <p className="nasaText"> {nasa.date}
<br/>
<br/>
 <FontAwesomeIcon icon={faCopyright} /> {nasa.copyright}
 <br/>APOD nasa
 
    </p>
    </>
);
}



 