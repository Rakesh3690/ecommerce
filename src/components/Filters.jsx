import React from "react";
import filters from "./filter";
import styled from "styled-components";

const Filters=styled.div`
background-color: rgb(199, 188, 188);
width:20%;
padding:20px;
position:fixed;
left:0;
height:80vh;
`
export default function Filter(props){
    const filter=filters.map(items=>{
        return(
            <Filter />
        )
    })

    return (
        <Filters>
            <h1>Filters</h1>
            <div className="cost">
                <h3>Cost</h3>
                <input type="checkbox" id="cost-type" name="price" value="price" />{props.price}
          
            </div>
            <div className="Brand">
                <h1>Brand</h1>
                <div className="item-type">
                    <input type="checkbox" id="brand-type" name="brand" value="brand" />{props.brand}
                </div>
            </div>
        </Filters>

    );
}
