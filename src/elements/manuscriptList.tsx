import React from "react";
import {IResultList, IResultItem} from "../misc/interfaces";
import ManuscriptListDetails from "./manuscriptListDetails";

function ManuscriptList(props: {result: IResultList}) {
    console.log('resultaatlijst: ' + props.result.items );
    return (
        <div>
        {props.result.items.map((item: IResultItem, index: number) => {
            console.log('resultitem: ' + item + index );

            return (
                <ManuscriptListDetails result={item} key={index}/>
            )
            })}
        </div>)
}

export default ManuscriptList