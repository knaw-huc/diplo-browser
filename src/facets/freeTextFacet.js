import React from "react";
// import {ISendCandidate} from "../misc/interfaces";
import {useState, useEffect} from "react";

function FreeTextFacet(props) {
    const [textField, setTextField] = useState("");
    const [refresh, setRefresh] = useState(true);

    function handleChange(e) {
        setTextField(e.currentTarget.value);
    }

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            setTextFacet();
        }
    }

    function setTextFacet() {
        if (textField !== "") {
            props.add({facet: "Free text", field: "FREE_TEXT", candidate: textField});
            setRefresh(!refresh);
        }
    }

    useEffect(() => {
        setTextField("");
    }, [refresh]);

    return (
        <div className="hcFacet">
            <div className="hcFacetTitle">Text search</div>
            <div className="hcFacetSearch">
                <input type="text" name="" id="freeText" value={textField} placeholder="Press ENTER to search"  onChange={handleChange} onKeyUp={handleKeyPress}/>
                <button type="button" name="button" onClick={() => {setTextFacet()}}>Search</button>
            </div>
        </div>
    )
}

export default FreeTextFacet