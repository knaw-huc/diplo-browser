import React from "react";
import {Fragment} from "react";
// import {IFacetValue, ISendCandidate} from "../misc/interfaces";
import {useState, useEffect} from "react";
import {HOME, SERVICE} from "../misc/config";

function ListFacet(props) {
    const [data, setData] = useState([]);
    const [url, setUrl] = useState(SERVICE + "/facet?name=" + props.field + "&amount=10");
    const [help, setHelp] = useState(false);
    const [loading, setLoading] = useState(true);
    const [more, setMore] = useState(true);
    const [hidden, setHidden] = useState(true);


    async function fetchData() {
        // const response = await fetch(url);
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                
                'Origin': HOME
            },
            // body: JSON.stringify(searchStruc)
        });




        const json = await response.json();
        setData(json);
        setLoading(false);
    }

    function sendCandidate(value) {
        props.parentCallback({facet: props.name, field: props.field, candidate: value});
    }

    function changeListLength() {
        if (more) {
            setUrl(SERVICE + "/facet?name=" + props.field + "&amount=500");
        } else {
            setUrl(SERVICE + "/facet?name=" + props.field + "&amount=10");
        }
        setMore(!more);
    }

    useEffect(() => {
        fetchData();
    }, [url]);



    return (

        <div className="hcFacet">
            <div className="hcFacetTitle" onClick={() => setHidden(!hidden)}>
                <span>{props.name}</span>
                <span className="hcIconHelp">
                    {hidden ? (<Fragment>+</Fragment>) : (<Fragment>-</Fragment>)}
                </span>
            </div>
            {/*{ help &&
            <div className="hcFacetHelp">
                <strong>The {props.name.toLowerCase()} facet </strong><br/>
                Filter on {props.name.toLowerCase()}.
            </div> }*/}
            {!hidden &&
            <div className="hcFacetItems">
                {!loading ? (<div>
                    {data.map((item, index) => {
                        return (<div key={index} className="hcFacetItem"  onClick={() => {sendCandidate(item.key)}}><div className="checkBoxLabel"> {item.key} ({item.doc_count})</div></div>);
                    })}
                    <div className="hcClickable" onClick={changeListLength}>
                        {more ? (<div>More...</div>) : (<div>Less...</div>)}
                    </div>
                </div>) : (<div>Loading...</div>)}
                <div>
                </div>
            </div>
            }
        </div>
    );

}

export default ListFacet;