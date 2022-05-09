import React from "react";
import "./styles.css";
import RenderForm from "./RenderForm";
import form from "./form.json"
//importation des données Json, pour un fichier distant, utilisation possible de fetch


//stockage des données Json
const FormData = form;

export default function App() {
    return (
        <div className="App">


            {FormData.map(config => RenderForm(config))}


        </div>
    );
}