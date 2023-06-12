import React from "react";
import { Fragment } from "react";

function Titelhack(props) {
    // console.log('titelhack',props);
    let titel = props.titel;
    // let titel_nl = props.titel;
    let titel_en = props.titel_en;

    if(! titel){
        titel = titel_en;
    }
    // console.log('titel', titel);
        return (
                <h3 className="detailH3">{titel}</h3>
        )
}

export default Titelhack