import React from "react";

export default function Team(props){
    return (
        <div>
            <img src={props.member_image} alt="" className="member_image" />
            <p className="member_name">{props.member_name}</p>
            <p className="member_role">{props.member_role}</p>
            <p className="member_links">
                <img src="" alt="image1" className="linkedin" />
                <img src="" alt="image2" className="instagram" />
                <img src="" alt="image2"  className="facebook"/>
            </p>
        </div>
    )
}