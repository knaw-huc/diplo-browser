import React from "react";
import {useParams, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import {Fragment} from "react";
import img from "../assets/img/M0004.jpg";
import {HOME, SERVICE} from "../misc/config";
import {IResultItem, IResultList, ICollection_item, ISearchObject} from "../misc/interfaces";
import Document from "../elements/document";
import Bibliography from "../elements/bibliography";
import Annotations from "../elements/annotations";
import {Base64} from "js-base64";


function Detail() {
    let navigate = useNavigate();
    const dummy: IResultItem = {
        _id: "",
        locatie: [],
        naam: "",
        onderwerp: [],
        organisatie: [],
        rol: [],
        titel: "'"
    }
    const params = useParams();
    const id = params.id as String;
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<IResultItem>(dummy);
    document.title = "Item | Diplomatieke Getuigenissen";

    async function fetch_data() {
        const url = SERVICE + "/item?id=" + id;
        const response = await fetch(url);
        const json: IResultItem = await response.json();
        if (json.titel !== undefined) {
            setData(json as IResultItem);
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
                    <div className="ecoDetailTable">
                        <div className="ecoDetailRow">
                            <div className="ecoLabelCell">
                                Naam
                            </div>
                            <div className="ecoCell">
                                {data.naam}
                            </div>
                        </div>
                        <div className="ecoDetailRow">
                            <div className="ecoLabelCell">
                                Organisatie
                            </div>
                            <div className="ecoCell">
                                {data.organisatie.map((item, index) => {
                                    if (index === 0) {
                                        return (<Fragment><div className="diploLink" onClick={() => {goSearch('Organisatie', 'organisatie.organisatie', item.organisatie)}}>{item.organisatie}</div></Fragment>)
                                    } else {
                                        return (<Fragment>; <div className="diploLink" onClick={() => {goSearch('Organisatie', 'organisatie.organisatie', item.organisatie)}}>{item.organisatie}</div></Fragment>)
                                    }
                                })}
                            </div>
                        </div>
                        <div className="ecoDetailRow">
                            <div className="ecoLabelCell">
                                Locatie
                            </div>
                            <div className="ecoCell">
                                {data.locatie.map((item, index) => {
                                    if (index === 0) {
                                        return (<Fragment><div className="diploLink" onClick={() => {goSearch('Locatie', 'locatie.locatie', item.locatie)}}>{item.locatie}</div></Fragment>)
                                    } else {
                                        return (<Fragment>; <div className="diploLink" onClick={() => {goSearch('Locatie', 'locatie.locatie', item.locatie)}}>{item.locatie}</div></Fragment>)
                                    }
                                })}
                            </div>
                        </div>
                        <div className="ecoDetailRow">
                            <div className="ecoLabelCell">
                                Rol
                            </div>
                            <div className="ecoCell">
                                {data.rol.map((item, index) => {
                                    if (index === 0) {
                                        return (<Fragment><div className="diploLink" onClick={() => {goSearch('Rol', 'rol.rol', item.rol)}}>{item.rol}</div></Fragment>)
                                    } else {
                                        return (<Fragment>; <div className="diploLink" onClick={() => {goSearch('Rol', 'rol.rol', item.rol)}}>{item.rol}</div></Fragment>)
                                    }
                                })}
                            </div>
                        </div>
                        <div className="ecoDetailRow">
                            <div className="ecoLabelCell">
                                Onderwerp
                            </div>
                            <div className="ecoCell">
                                {data.onderwerp.map((item, index) => {
                                    if (index === 0) {
                                        return (<Fragment><div className="diploLink" onClick={() => {goSearch('Onderwerp', 'onderwerp.onderwerp', item.onderwerp)}}>{item.onderwerp}</div></Fragment>)
                                    } else {
                                        return (<Fragment>; <div className="diploLink" onClick={() => {goSearch('Onderwerp', 'onderwerp.onderwerp', item.onderwerp)}}>{item.onderwerp}</div></Fragment>)
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default Detail;