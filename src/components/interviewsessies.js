import React from "react";
import { Fragment } from "react";

function interviewsessies(props) {
    console.log('props opnamedata', props)
    let interviewsessies = props.interviewsessies;
    let id = props.id;
    console.log('id', id);
    console.log('interviewsessies', interviewsessies)
    if(interviewsessies.length === 0){
        return <h5>Nog geen Interviewsessie</h5>
    }

    if (!interviewsessies[0].Inhoud) {

        return <h5>Nog geen Inhoudsbeschrijving</h5>

    } else {
        // return interviewsessies[0].Duur // deze werkt

        // return (
        //     <div>
        //         hoi
        //     </div>
        // )

        return(
                 
            <Fragment >  
                {interviewsessies.map((item, index) => {                                    
                    return (
                        <Fragment key={index}>
                        <div  className="ecoDetailRow">
                            <div className="ecoLabelCell">Opname {item.Volgorde} </div>
                            <div className="ecoCell"> {item.Opnamedatum} duur: {item.Duur}</div>                             
                        </div>     
                         <div  className="ecoDetailRow">
                            <div className="ecoLabelCell"></div>
                            <div className="ecoCell">VIDEOSTILL </div>
                        </div>                            
                        <div  className="ecoDetailRow">
                            <div className="ecoLabelCell">Inhoud</div>
                            <div className="ecoCell">
                                <ul>
                                {item.Inhoud.map((item, index) => {
                                    return (
                                        <li key={index}> 
                                            <a href={'http://localhost/video/index.php?stamp=' + item.tijdstip + '&id=' + id}> {item.tijdstip} </a>
                                            {/* <a href={'https://video.sd.di.huc.knaw.nl/video/index.php?stamp=' + item.tijdstip + '&id=' + id}> {item.tijdstip} </a> */}

                                            {item.onderwerp}                                                                    
                                        </li>
                                    )
                                })}
                                </ul>
                            </div>
                        </div>
                        <div  className="ecoDetailRow">
                            <div className="ecoLabelCell"></div>
                            <div className="ecoCell"><hr></hr> </div>
                        </div>  
                         
                        </Fragment>    
                    )
                })}
            </Fragment>   
            
        )

    }
}



export default interviewsessies;