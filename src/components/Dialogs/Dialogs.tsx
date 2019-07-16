import React from "react";
import p from './Dialogs.module.css';
// import {NavLink} from "react-router-dom";
import Dialogitem from "./Dialogitem/Dialogitem";
import Dialosmessage from "./Dialosmessage/Dialosmessage";
import {AddMessageReduxForm} from "./FormSendMessage";
import {any} from "prop-types";
// import {sendMessageCreator, updateMessageCreator} from "../../redux/dialogs-reducer";


//2
// const Dialogitem = (props) => {
//     return (
//
//
//         <div className={p.items}>
//             <NavLink to={"/dialogs/" + props.id} className={p.link}> {props.name} </NavLink>
//         </div>
//     );
// }

// const Dialosmessage = (props) => {
//     return (
//         <div className={p.message}>
//             {props.message}
//
//         </div>
//     );
// }

//
// 1

interface iprops {
    add: Function,
    state: any,
    changemess: Function,

}


const Dialogs = (props: iprops) => {

    const onSubmit = (data: any) => {
        console.log(data);
        props.add(data.dialogSendMessage)

    };





    let states = props.state;


    //let textRef = React.createRef();


    let sendMessage = () => {
        props.add()

        // props.dispatch(sendMessageCreator());

    };

    let changeMessage = (e: any) => {
        //let text = textRef.current.value;
        let text = e.target.value;
        props.changemess(text)

        // props.dispatch(updateMessageCreator(text))

    };


    //
    // let dialogsdata = [
    //     {id: "alina",  name: "Alina",},
    //     {id: "bazil",  name: "Bazil",},
    //     {id: "matsal", name: "Matsal",},
    //     {id: "herman", name: "Herman",},
    //     {id: "timur",  name: "Timur",},
    //
    //
    //
    // ]


    let dialogselements =
        states.dialogsdata.map(dialog => <Dialogitem name={dialog.name} key={dialog.id}
                                                     id={dialog.id} avatar={dialog.avatar}/>);
    //передаются props в компоненту


    // let messagesdata = [
    //         {id: "1", message: "hi",},
    //         {id: "2", message: "Hi gays",},
    //         {id: "3", message: "shit",},
    //         {id: "4", message: "hi i am herman",},
    //         {id: "5", message: "hi am timur",},
    //
    //
    //
    // ]

    let messageelements =
        states.messagesdata.map(mess  => <Dialosmessage message={mess.message} key={mess.id}/>);


    return (
        <div className={p.dialogs}>
            <div className={p.dialogsitems}>


                {dialogselements}


                {/*4*/}

                {/*refactor map*/}
                {/*<Dialogitem name={dialogsdata [0].name} id={dialogsdata [0].id}/>*/}
                {/*<Dialogitem name={dialogsdata [1].name} id={dialogsdata [1].id}/>*/}
                {/*<Dialogitem name={dialogsdata [2].name} id={dialogsdata [2].id}/>*/}
                {/*<Dialogitem name={dialogsdata [3].name} id={dialogsdata [3].id}/>*/}
                {/*<Dialogitem name={dialogsdata [4].name} id={dialogsdata [4].id}/>*/}

                {/*//3*/}

                {/*передаем props*/}
                {/*<Dialogitem name="Alina"  id="alina"/>*/}
                {/*<Dialogitem name="Bazil"  id="bazil"/>*/}
                {/*<Dialogitem name="Matsal" id="matsal"/>*/}
                {/*<Dialogitem name="Herman" id="herman"/>*/}
                {/*<Dialogitem name="Timur"  id="timur"/>*/}


                {/*1*/}


                {/*отрисовка JSX*/}
                {/*<div className={p.items}>*/}
                {/*    <NavLink to="/dialogs/alina" className={p.link}>Alina</NavLink>*/}
                {/*</div>*/}

                {/*<div className={p.items}>*/}
                {/*    <NavLink to="/dialogs/bazil" className={p.link}>Bazil</NavLink>*/}
                {/*</div>*/}

                {/*<div className={p.items}>*/}
                {/*    <NavLink to="/dialogs/matsal" className={p.link}>Matsal</NavLink>*/}
                {/*</div>*/}

                {/*<div className={p.items}>*/}
                {/*    <NavLink to="/dialogs/herman" className={p.link}>Herman</NavLink>*/}
                {/*</div>*/}


            </div>


            <div className={p.messages}>


                {messageelements}





                    {/*<div className={p.send}>*/}

                    {/*    <textarea onChange={changeMessage} placeholder={"enter you message"}*/}
                    {/*              value={states.textmessage}/>*/}

                    {/*    <div className={p.send}>*/}

                    {/*        <button onClick={sendMessage}> send message</button>*/}

                    {/*    </div>*/}

                    {/*</div>*/}

                <AddMessageReduxForm onSubmit={onSubmit}/>







                {/*refactor map*/}
                {/*<Dialosmessage message={messagesdata [0].message}/>*/}
                {/*<Dialosmessage message={messagesdata [1].message}/>*/}
                {/*<Dialosmessage message={messagesdata [2].message}/>*/}
                {/*<Dialosmessage message={messagesdata [3].message}/>*/}
                {/*<Dialosmessage message={messagesdata [4].message}/>*/}

                {/*<Dialosmessage message=" hi"/>*/}
                {/*<Dialosmessage message=" hi gays"/>*/}
                {/*<Dialosmessage message="shit"/>*/}
                {/*<Dialosmessage message="hi i am Herman"/>*/}
                {/*<Dialosmessage message="hi i am Timur"/>*/}


                {/*<div className={p.message}>*/}
                {/*    hi*/}
                {/*</div>*/}
                {/*<div className={p.message}>*/}
                {/*    hello*/}
                {/*</div>*/}
                {/*<div className={p.message}>*/}
                {/*    shit*/}
                {/*</div>*/}
            </div>


        </div>

    );
};


export default Dialogs;
