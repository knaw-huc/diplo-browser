import React from "react";
// import {IResultItem, ISearchObject} from "../misc/interfaces";
import {Base64} from "js-base64";
import {useNavigate} from "react-router-dom";

function Document(props) {
    let navigate = useNavigate();

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

    return (<div>
        <h3 className="detailH3">{props.item.titel}</h3>
        <div className="ecoDetailTable">
            <div className="ecoDetailRow">
                <div className="ecoLabelCell">
                    Titel
                </div>
                <div className="ecoCell">
                    {props.item.titel}
                </div>
            </div>
        </div>
    </div>)
}

export default Document;