import React from "react";
import {useParams, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import {Fragment} from "react";
import img from "../assets/img/M0004.jpg";
import {HOME, SERVICE} from "../misc/config";
import {IResultItem, IDetailItem, IResultList, ICollection_item, ISearchObject, ILocatie, iOpnameDatum, iStationering} from "../misc/interfaces";
import Document from "../elements/document";
import Bibliography from "../elements/bibliography";
import Annotations from "../elements/annotations";
import {Base64} from "js-base64";
import ReactPlayer from 'react-player/youtube'

// Only loads the YouTube player

function Video() {
    console.log('video');
    return (
        <div className="hcContentContainer">
        <h1>video</h1>
        <ReactPlayer url='https://www.youtube.com/watch?v=1DYqguN0H70' />
        </div>
    )
}


function Detail() {
    let navigate = useNavigate();
    const dummy: IDetailItem = {
        _id: "",
        naam_titel: "",
        naam_voornaam: "",
        naam_tussenvoegsel: "",
        naam_achternaam: "",
        locaties:  [],
        opnamedata: [],
        stationeringen: [],
        interviewsessies: [],
        titel: "'",
        titel_en: "'"        
    }
    const params = useParams();
    const id = params.id as String;
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<IDetailItem>(dummy);
    document.title = "Item | Diplomatieke Getuigenissen";

    /*
    async function fetch_data() {
        const url = SERVICE + "/item?id=" + id;
        const response = await fetch(url);
        const json: IResultItem = await response.json();
        if (json.titel !== undefined) {
            setData(json as IResultItem);
            setLoading(false);
        }
    }
    */

    async function fetch_data() {
        const url = SERVICE + "/detail?rec=" + id;
        const response = await fetch(url);
        const json: IDetailItem = await response.json();
        if (json.titel !== undefined) {
            setData(json as IDetailItem);
            setLoading(false);
        }
    }

    function goSearch(label: string, field: string, facetValue: string) {
        let searchStruc: ISearchObject = {
            searchvalues: [{name: label, field: field, values: [facetValue]}],
            page: 1,
            page_length: 30,
            sortorder: "title"
        };
        const code: string = Base64.encode(JSON.stringify(searchStruc));
        navigate("/search/" + code);
    }
    useEffect(() => {
        fetch_data();
    }, [loading]);
    console.log('hee' + data.stationeringen);
    let x  = data.stationeringen[6];
    // console.log('x', typeof x, x, x['titel']);
    console.log('x', typeof x, x);

    // console.log(x.locatie);

    return (

        <div className="hcContentContainer">
            {/*<div className="collectionBrowser">
                {collectionFetched ? (
                    <div>Select manuscript from search results: </div>
                ) : (
                    <div>Loading</div>
                )}
            </div>*/}
            <div className="hcLayoutFacet-Result hcBasicSideMargin hcMarginBottom15">
                {loading ? (
                    <div>Loading</div>
                ) : (<div>
                    <h3 className="detailH3">{data.titel}</h3>
                    <h3 className="detailH3">{data.titel_en}</h3>

                    <div className="ecoDetailTable">
                        <div className="ecoDetailRow">
                            <div className="ecoLabelCell">
                                Naam
                            </div>
                            <div className="ecoCell">
                                {data.naam_titel} {data.naam_voornaam} {data.naam_tussenvoegsel} {data.naam_achternaam}
                            </div>
                        </div>
                        <div className="ecoDetailRow">
                            <div className="ecoLabelCell">
                                Loopbaan
                            </div>
                            {/* <div className="ecoCell">
                                <ol>
                                {data.locaties.map((item: ILocatie, index: number) => {
                                    return (
                                 <li key={index}>{item.locatie}</li>
                            )
                            })}
                                </ol>
                            </div> */}
                            <div className="ecoCell">
                                <ol>
                                {data.stationeringen.map((item: iStationering, index: number) => {
                                    console.log('i' +index, item);
                                    console.log(item.Organisatie);
                                    return (
                                    <li key={index}> {item.Titel} {item.Locatie} {item.Organisatie}, {item.Periode.Van} - {item.Periode.Tot}
                                    
                                    {/* {item.Periode.map((i:any, index:any)=>{
                                        return <span key={index}>{i.van}</span>

                                    })} */}
                                    </li>
                            )
                            })}
                                </ol>
                            </div>
                        </div>

                        {data.interviewsessies.map((item: any, index: any) => {
                                    return (
                                        <Fragment key={index}>
                                            <div  className="ecoDetailRow">
                                                <div className="ecoLabelCell"><hr></hr></div>
                                                <div className="ecoCell"><hr></hr></div> 
                                            </div> 
                                            <div  className="ecoDetailRow">
                                                <div className="ecoLabelCell">Interviewsessie</div>
                                                <div className="ecoCell">{item.Volgorde}</div> 
                                            </div>                                  
                                            <div  className="ecoDetailRow">
                                                <div className="ecoLabelCell">Datum</div>
                                                <div className="ecoCell">{item.Opnamedatum}</div>                                   
                                            </div>                                  
                                            <div  className="ecoDetailRow">
                                                <div className="ecoLabelCell">Duur</div>
                                                <div className="ecoCell">{item.Duur}</div>
                                            </div>                                  
                                            <div  className="ecoDetailRow">
                                                <div className="ecoLabelCell"></div>
                                                <div className="ecoCell">VIDEOSTILL <br></br>KLIKBAAR</div>
                                            </div>                                  
                                            <div  className="ecoDetailRow">
                                                <div className="ecoLabelCell">Inhoud</div>
                                                <div className="ecoCell">
                                                <ul>
                                                    {item.Inhoud.map((item: any, index: any) => {

                                                        return (
                                                            <li key={index}> 
                                                                <a href={'video.php?stamp=' + item.tijdstip}> {item.tijdstip} </a>
                                                                {item.onderwerp}                                                                    
                                                            </li>
                                                            // <li key={index}>{item.onderwerp} <i>=&gt;:</i> <a href="video.php?stamp=${item.tijdstip}"> {item.tijdstip}</a></li>
                                                        )
                                                    })}
                                                    </ul>
                                               </div>
                                            </div>                                  
                                        </Fragment>
                            )
                            })}
                        

                        <div className="ecoDetailRow">
                            
                            <div className="ecoLabelCell">
                                Interviewsessie datum
                            </div>
                            <div className="ecoCell">
                                <ul>
                                {data.opnamedata.map((item: iOpnameDatum, index: number) => {
                                    return (
                                 <li key={index}>{item.opnamedatum}</li>
                            )
                            })}
                                </ul>
                            </div>
                        </div>
                    </div>




                </div>)}
            </div>
        </div>
    )
}

export default Video;