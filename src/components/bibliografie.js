import React from "react";
import {Fragment} from "react";
import {Link} from "react-router-dom";

function Bibliografie(props){
    let bibliografie = props.bibliografie;
    // misschien nog sorteren
    console.log('bibliografie', bibliografie)
// return (
    if(bibliografie.length === 0){
        return <h5>Geen Bibliografie</h5>
    }

//     <div>hee</div>
// )


return(

    <div className="ecoDetailRow">
        <div className="ecoLabelCell">
            Bibliografie
        </div>                          
        <div className="ecoCell">
            <ul>
            {bibliografie.map((item, index) => {                                    
                let zoteroLink = item.zoteroLink;
                // let display = item.Display; // later
                // console.log('type', stationeringstype);
                console.log('zotero', zoteroLink);
               
              
                    return (
                        // <li key={index}>geen bestaand type, {stationeringstype}</li>
                        <fragment>
                        {/* <a href={item.zoteroLink}>{item.zoteroLink}</a> <br></br> */}
                        {/* <a href={item.api}>{item.api}</a> <br></br> */}
                        <li key={index} dangerouslySetInnerHTML={{ __html: item.biblioinfo }} />
                        {/* {item.biblioinfo} */}
                        </fragment>
                    )
                
                
            })}
            </ul>
        </div>
    </div>


)

}

export default Bibliografie