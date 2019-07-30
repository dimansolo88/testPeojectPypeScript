import React from 'react';
import m from './Mypost.module.css';
// import {addpostActionCreator, updatepostActionCreator} from "../../../redux/profile-reducer";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";
import {AddPostReduxForm} from "./AddpostForm";


interface Interface {
    add: Function,
    stated: any,

}


const Mypost = (props: Interface) => {


    const adddNewPost = (data: any) => {
        props.add(data.addNewPost)

    };


    let states = props.stated;





    let postselements =
        states.postdata.map((post: any) => <Post message={post.message} key={post.id} like={post.like} avatar={post.avatar}/>)








    return (


        <div className={m.post}>

            <NewPost/>


            <h3> my posts</h3>



            <AddPostReduxForm onSubmit={adddNewPost} />

            {postselements}




        </div>
    )
};

export default Mypost;

