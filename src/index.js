import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store  from './redux/redux-store';
//import {addnewpost, updatepost,} from "./redux/State";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
// import {renderall} from "./Render";


// let postdata = [
//     {id: 1, message: "today i in first time eated a dog shit, it was great, and me nowbody seen ", like: "1200"},
//     {id: 2, message: "hi", like: "34",},
//     {id: 2, message: "t is mt first podt", like: "0",},
//
//
// ]
//
//
//
// let dialogsdatas = [
//     {id: "alina",  name: "Alina",},
//     {id: "bazil",  name: "Bazil",},
//     {id: "matsal", name: "Matsal",},
//     {id: "herman", name: "Herman",},
//     {id: "timur",  name: "Timur",},
//
//
//
// ]
//
//
// let messagesdata = [
//     {id: "1", message: "hi",},
//     {id: "2", message: "Hi gays",},
//     {id: "3", message: "shit",},
//     {id: "4", message: "hi i am herman",},
//     {id: "5", message: "hi am timur",},
//
//
//
//
//
// ]

//postdata={postdata}  dialogsdatad={dialogsdatas} messagesdata={messagesdata}


//
// let renderall = () => {
//     ReactDOM.render(
//         <BrowserRouter>
//             <App astate={state} a={addnewpost} />
//         </BrowserRouter> ,document.getElementById('root')
//     );
// }


// let renderall = () => {
    //запускающая сторона в index.js получит satte из  state.js через import
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter> ,document.getElementById('root')

    //astate={store.getState()} dispatch={store.dispatch.bind(store)}
    );


//a={store.addnewpost.bind(store)} cdx={store.updatepost.bind(store)}



// renderall();
//
// store.subscribe (() => {
//     renderall();
//
// });



// renderall(store.getState());
// store.subscribe(renderall)

//
// renderall(store.getState());
// store.subscribe(() => {
//     let state = store.getState();
//     renderall(state)
// });








// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
