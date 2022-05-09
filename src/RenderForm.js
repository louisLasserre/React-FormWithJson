import React from "react";

//j'ai voulu créer des componsants pour chaque éléments mais en faisant ainsi, les composants ne pouvaient pas contenir
//d'enfants, je les ai donc rentrés manuellement pour certains (const ligne 15)
import Div from "./components/Div"
import Option from "./components/Option";
import Input from "./components/Input";
import Image from "./components/Image";
import Select from "./components/Select";
import Button from "./components/Button";

import {NativeSelect} from "@mui/material";


const FormToComponentsAssociation = {
    //valeurs acceptés du Json qui sont associées à un élément html
    div: "div",
    form: "form",
    img: Image,
    text: "p",
    title: "h1",
    option: "option",
    input: Input,
    label: "label",
    button: Button,
    select: NativeSelect,
};

function renderer(config) {
    //fonction récursive qui créer les éléments grâce à React.createElement()
    //cette fonction est appelée dans le App.js
    if (typeof FormToComponentsAssociation[config.component] !== "undefined") {
        return React.createElement(
            FormToComponentsAssociation[config.component]
            ,
            {
                class: config.class,
                placeholder: config.placeholder,
                variant: config.variant


            },
            config.children &&
            (typeof config.children === "string"
                ? config.children
                : config.children.map(c => renderer(c)))
        );
    }
}

export default renderer;