import React from "react";
import {Fragment} from "react";

function Stationeringen(props){
    let stationeringen = props.stationeringen;
    console.log('stationeringen', stationeringen)
// return (
    if(stationeringen.length === 0){
        return <h5>Geen Loopbaan</h5>
    }

//     <div>hee</div>
// )


return(

    <div className="ecoDetailRow">
        <div className="ecoLabelCell">
            Loopbaan
        </div>                          
        <div className="ecoCell">
            <ol>
            {stationeringen.map((item, index) => {                                    
                let stationeringstype = item.Type;
                let display = item.Display; // later
                console.log('type', stationeringstype);
                console.log('display', display);
                if(display === 'no') {
                    return (
                        <Fragment></Fragment>
                        //  <li key={index}>{item.Titel} {item.Locatie}, {item.Organisatie}, {item.Periode.Van}-{item.Periode.Tot} (DISPLAY NO)</li>

                    )
                }
                if(stationeringstype === 'departement' ){
                    return (                    
                        <li key={index}>{item.Titel ? item.Titel + ',' :'' } {item.Departement ? item.Departement + ',' :'' } {item.Periode.Van}-{item.Periode.Tot} (DEPART)</li>
                        // DEPART
                    ) 
                } else if(stationeringstype === 'post'){
                    return (
                        <li key={index}>{item.Titel ? item.Titel + ',' :'' } {item.Post ? item.Post + ',' :'' } {item.Periode.Van}-{item.Periode.Tot} (POST) </li>
                        // POST
                    )
                } else if(stationeringstype === 'detachering'){
                    return (
                        <li key={index}>{item.Titel ? item.Titel + ',' :'' } {item.Organisatie ? item.Organisatie + ',' :'' } {item.Locatie ? item.Locatie + ',' :'' } {item.Periode.Van}-{item.Periode.Tot} (DETACH)</li>
                        // DETACH
                    )
                } else if(stationeringstype === 'buiten'){
                    return (
                        <li key={index}>{item.Titel ? item.Titel + ',' :'' } {item.Organisatie ? item.Organisatie + ',' :'' }  {item.Locatie ? item.Locatie + ',' :'' } {item.Periode.Van}-{item.Periode.Tot} (BUITEN)</li>
                        // BUITEN
                    )                                        
                } else {
                    return (
                        // <li key={index}>geen bestaand type, {stationeringstype}</li>
                        <li key={index}>{item.Titel ? item.Titel + ',' :'' } {item.Organisatie ? item.Organisatie + ',' :'' }  {item.Locatie ? item.Locatie + ',' :'' } {item.Periode.Van}-{item.Periode.Tot} (UNDEF)</li>
                    )
                }
                
            })}
            </ol>
        </div>
    </div>


)

}

export default Stationeringen