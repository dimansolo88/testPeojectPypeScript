import React from 'react';
// import p from './Profile.module.css';
// import Mypost from "./Mypost/Mypost";
import Profileimg from "./Profileimg/Profileimg";
import PfofileInfo from "./ProfileInfo/ProfileInfo";
// import Post from "./Mypost/Post/Post";
import MypostContanier from "../Mypost/MypostContanier";


const Profile = (props) => {


    // let postdata = [
    //     {id: 1, message: "today i in first time eated a dog shit, it was great, and me nowbody seen ", like: "1200"},
    //     {id: 2, message: "hi", like: "34",},
    //     {id: 2, message: "t is mt first podt", like: "0",},
    //
    //
    // ]


    return (
        <div>


            <Profileimg/>
            <PfofileInfo {...props}  />
            <MypostContanier/>

            {/*state={props.state} dispatch={props.dispatch}*/}


            {/*<Mypost state={props.state}  dispatch={props.dispatch} />*/}
            {/*<Post message="today i in first time eated a dog shit, it was great, and me nowbody seen" like="1200"/>*/}
            {/*<Post message="hi" like="34"/>*/}
            {/*<Post message="t is mt first podt" like="0"/>*/}
            {/*<Post message={postdata [0].message} like={postdata [0].like}/>*/}
            {/*<Post message={postdata [1].message} like={postdata [1].like}/>*/}
            {/*<Post message={postdata [2].message} like={postdata [2].like}/>*/}
            {/*<Post/>*/}

            {/*postdata={props.profilepagest.postdata} j={props.profilepagest.textmypost}*/}


        </div>
    );
};


//c={props.b} jfd={props.cdv}

export default Profile;
