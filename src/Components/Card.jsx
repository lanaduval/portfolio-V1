import axios from "axios";
import { useState, useEffect } from "react";
export default function Card(){
   const API = "https://aztro.sameerkumar.website?sign=gemini&day=today";
   const [astro, setAstro] = useState('');

    useEffect(() => {
        axios
          .get(API)
          .then((res) => {
            setAstro(res.data);
          })
          .catch((err) => console.error(err));
      }, []);
      console.log(setAstro);
    return (
        <div>

        </div>

    );
}