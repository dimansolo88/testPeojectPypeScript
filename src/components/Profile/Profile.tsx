import React from 'react';
// import p from './Profile.module.css';
// import Mypost from "./Mypost/Mypost";
import Profileimg from "./Profileimg/Profileimg";
import PfofileInfo from "./ProfileInfo/ProfileInfo";
// import Post from "./Mypost/Post/Post";
import MypostContanier from "../Mypost/MypostContanier";


const Profile = (props: any) => {




    return (
        <div>


            <Profileimg/>
            <PfofileInfo {...props}  />
            <MypostContanier/>




        </div>
    );
};



export default Profile;
