import React from 'react';
import style from "./Profileimg.module.css";
import imageProfile from "../../../assets/images/imageProfile.jpeg"


const Profileimg = (props) =>{
    return (
        <img  className = {style.profile_img} src={imageProfile}   alt="profile" />
    );
};

export default Profileimg;