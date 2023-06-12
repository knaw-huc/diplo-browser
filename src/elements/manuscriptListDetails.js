import React from "react";
import {useNavigate} from "react-router-dom";
// import {IResultItem, IRol} from "../misc/interfaces";
import img from "../assets/img/manuscript.jpg";
import Titelhack from "../components/titelhack";

function ManuscriptListDetails(props) {
    let navigate = useNavigate();

    function compare( a, b ) {
        if ( a.rol < b.rol ){
            return -1;
        }
        if ( a.rol > b.rol ){
            return 1;
        }
        return 0;
    }
    //let roles: IRol[] = props.result.rol;
    //roles.sort(compare);

    return (<div className="hcResultListDetail">
  
        <Titelhack titel={props.result.titel} titel_en={props.result.titel_en} />
        <div className="detailLine"><strong>{props.result.record} Ingevoerd op: 01/11/2021</strong></div>
        <div>
            <ul className="ManuscriptListBtns">
                <li onClick={() => {
                    window.scroll(0, 0);
                    navigate('/detail/' + props.result.record)}
                }>Details</li>
            </ul>
        </div>
    </div>);
}

export default ManuscriptListDetails;