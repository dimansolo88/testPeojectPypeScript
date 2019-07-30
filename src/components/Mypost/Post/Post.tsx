import React from "react";
import p from './Post.module.css';


interface Interface {
    avatar: any,
    message: string,
    like: number,

}


const Post = (props: Interface) => {
    return (
        <div className={p.post}>
            <img className={p.img} src={props.avatar} alt="avatar" />
            {props.message}






            <div>
                <span> like </span>  <span className={p.like}> {props.like} </span>
            </div>



        </div>
    );
};


export default Post;


