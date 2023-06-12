import React from "react";
import {useParams, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import {Fragment} from "react";
import img from "../assets/img/M0004.jpg";
import {HOME, SERVICE} from "../misc/config";
// import {IResultItem, IDetailItem, IResultList, ICollection_item, ISearchObject, ILocatie, iOpnameDatum, iStationering} from "../misc/interfaces";
import Document from "../elements/document";
import Bibliography from "../elements/bibliography";
import Annotations from "../elements/annotations";
import Interviewsessies from "./interviewsessies";
import {Base64} from "js-base64";
import Stationeringen from "./stationeringen";
import Bibliografie from "./bibliografie";

import Titelhack from "./titelhack";


function Detail() {
    let navigate = useNavigate();
    const params = useParams();
    const id = params.id;
    // console.log('idd:', id);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    document.title = "Item | Diplomatieke Getuigenissen";


    async function fetch_data() {
        const url = SERVICE + "/detail?rec=" + id;
        const response = await fetch(url);
        const json = await response.json();
        if (json.titel !== undefined) {
            setData(json);
            setLoading(false);
        }
    }

    function goSearch(label, field, facetValue) {
        let searchStruc = {
            searchvalues: [{name: label, field: field, values: [facetValue]}],
            page: 1,
            page_length: 30,
            sortorder: "title"
        };
        const code = Base64.encode(JSON.stringify(searchStruc));
        navigate("/search/" + code);
    }
    useEffect(() => {
        fetch_data();
    }, [loading]);
    console.log('data', data);
    return (

        <div className="hcContentContainer">

            <div className="hcLayoutFacet-Result hcBasicSideMargin hcMarginBottom15">
                {loading ? (
                    <div>Loading</div>
                ) : (<div>
                   <Titelhack titel={data.titel} titel_en={data.titel_en} />

                    <div className="ecoDetailTable">
                        <div className="ecoDetailRow">
                            <div className="ecoLabelCell">
                                Naam
                            </div>
                            <div className="ecoCell">
                                {data.naam_titel} {data.naam_voornaam} {data.naam_tussenvoegsel} {data.naam_achternaam}
                            </div>
                        </div>              
                       
                    </div>
                    {/* <h3 className="detailH3">Stationering</h3> */}

                    <div className="ecoDetailTable">
                        <Stationeringen stationeringen={data.stationeringen} />
                    </div>

                    <div className="ecoDetailTable">
                        <Bibliografie bibliografie={data.bibliografie} />
                    </div>

                    <h3 className="detailH3">Opnames</h3>
                    <div className="ecoDetailTable">
                        <Interviewsessies id={id} interviewsessies={data.interviewsessies} />
                    </div>


                </div>)}
            </div>
        </div>
    )
}

export default Detail;