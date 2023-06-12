import React from "react";
import {useParams, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import {Base64} from "js-base64";
import {Fragment} from "react";
import FreeTextFacet from "../facets/freeTextFacet";
import {SERVICE, HOME} from "../misc/config";
import TestTextSearch from "../elements/testTextSearch";

function Test() {
    

    return (
        <div className="hcContentContainer">
            <div className="hcBasicSideMargin hcMarginTop1 hcMarginBottom1">
                <h1>Zoek</h1>
            </div>
            <div className="hcLayoutFacet-Result hcBasicSideMargin hcMarginBottom15">
                {/* <div className="hcLayoutFacets">

                </div> */}
                <div className="hcLayoutResults">
 
                    <TestTextSearch />

                </div>
            </div>
        </div>
    )
}

export default Test;