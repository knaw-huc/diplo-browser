import React from "react";
import {useParams, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import {Base64} from "js-base64";
import {Fragment} from "react";
import {SERVICE, HOME} from "../misc/config";


function TestTextSearch() {
    const [textField, setTextField] = useState("");
    const [textfragments, setTextfragments] = useState([])
    const endpoint = "http://localhost:5050/search/?s=";

    function handleChange(e) {
        setTextField(e.currentTarget.value );
        console.log('handle change')
    }

    function handleClick(e){
        console.log('verstuur dit naar de service:' + endpoint + textField);
        e.preventDefault();
        // setSearchURL(endpoint +  textField); // dan moet ik 2 keer klikken... dus omweg via state eruit gehaald
        haalOp(endpoint +  textField.toLowerCase()); // anders pakt ES hem niet zoals hij nu is ingericht, aan de index nog niets aan getweaked
    }

    async function haalOp(urlding){
        let url = urlding;
        const response = await fetch(url);
        const jsonData = await response.json();
        setTextfragments(jsonData.hits.hits);
    }

    console.log('textfragments', textfragments);
    
    return (   

        <div>
            <div>
                <form onSubmit={handleClick}>
                <input type="text" name="" id="freeText" value={textField} placeholder="Zoekterm"  onChange={handleChange}/>
                <button type="submit" name="button" onClick={handleClick}>Zoek</button>
                </form>
            </div>
            <div id="result">

            {textfragments.map((item, index) => {
 
                return (
                    <ol  id={index}>
                         <h3>{item._id}</h3>
                         {item.highlight.vtttext.map((item, index) => {                            
                            return (
                                <li id={index} dangerouslySetInnerHTML={{ __html: item}} />
                            )
                        })}
                    </ol>    
                )        

            })}
          
            </div>
        </div>

    )
}

export default TestTextSearch;