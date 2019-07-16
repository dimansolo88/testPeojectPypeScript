import React from 'react';
import m from './Mypost.module.css';
// import {addpostActionCreator, updatepostActionCreator} from "../../../redux/profile-reducer";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";
import {AddPostReduxForm} from "./AddpostForm";


const Mypost = (props) => {


    const adddNewPost = (data) => {
        props.add(data.addNewPost)

    };


    let states = props.stated;

    // let postdata = [
    //     {id: 1, message: "today i in first time eated a dog shit, it was great, and me nowbody seen ", like: "1200"},
    //     {id: 2, message: "hi", like: "34",},
    //     {id: 2, message: "t is mt first podt", like: "0",},
    //
    //
    // ]


    let postselements =
        states.postdata.map(post => <Post message={post.message} key={post.id} like={post.like} avatar={post.avatar}/>)


    // let addpost = () => {
    //     let text = document.getElementById("id").value;
    //     alert("Вы хотите добавить ПОСТ" +text);
    // }



    // let newel = React.createRef();
    // let addpost = () => {
    //     props.add()





        // props.dispatch(addpostActionCreator());
        //let alertmessage = newel.current.value; //обращение к элементу получение value

        //({type: "ADD-POST"})
        //props.c(alertmessage); //приходит функция (addnewpost) по пушу поста на стену.
        //newel.current.value = "";
        //props.jfd(""); //зазватывает и передает пустую строку

    //};


    // let postchange = () => {
    //     let alertmessage = newel.current.value; //получает значение from texarea
    //     props.change(alertmessage)


        // props.dispatch(updatepostActionCreator(alertmessage))
        //props.jfd(alertmessage)//приходит функция (updatepost) from state
        //({type:"UPDATE-POST", postext: alertmessage})

    //};


    return (


        <div className={m.post}>

            <NewPost/>


            <h3> my posts</h3>

            {/*<div>*/}
            {/*    <textarea onChange={postchange} ref={newel} value={states.textmypost}/>*/}

            {/*</div>*/}

            {/*<div>*/}
            {/*    <button onClick={addpost} className={m.button}>add post</button>*/}
            {/*</div>*/}

            <AddPostReduxForm onSubmit={adddNewPost} />

            {postselements}


            {/*<Post message={postdata [0].message} like={postdata [0].like}/>*/}
            {/*<Post message={postdata [1].message} like={postdata [1].like}/>*/}
            {/*<Post message={postdata [2].message} like={postdata [2].like}/>*/}
            {/*<Post />*/}


            {/*<Post message="today i in first time eated a dog shit, it was great, and me nowbody seen" like="1200"/>*/}
            {/*<Post message="hi" like="34"/>*/}
            {/*<Post message="t is mt first podt" like="0"/>*/}


        </div>
    )
};

export default Mypost;

