// // import React from 'react';
//
// //
// let renderall = () => {
//
// }
//
// // import {renderall} from "../Render";
//
//
// let state = {
//
//     profilepage: {
//
//         postdata: [
//             {
//                 id: 1,
//                 message: "today i in first time eated a dog shit, it was great, and me nowbody seen ",
//                 like: "1200"},
//             {id: 2, message: "hi", like: "34",},
//             {id: 3, message: "t is mt first podt", like: "0",},
//             {id: 4, message: "all is worse", like: "0",},
//
//         ],
//
//
//         textmypost: ""
//
//
//     },
//
//
//     dialogspages: {
//
//         dialogsdata: [
//             {id: "alina", name: "Alina",},
//             {id: "bazil", name: "Bazil",},
//             {id: "matsal", name: "Matsal",},
//             {id: "herman", name: "Herman",},
//             {id: "timur", name: "Timur",}
//         ],
//
//         messagesdata: [
//             {id: "1", message: "hi",},
//             {id: "2", message: "Hi gays",},
//             {id: "3", message: "shit",},
//             {id: "4", message: "hi i am herman",},
//             {id: "5", message: "hi am timur",},
//         ],
//
//
//         // sitebar:[
//         //     {id: "1", secondname "Alina"},
//         //     {id: "2", secondname "Bazil"},
//         //     {id: "3", secondname "Herman"},
//         // ]
//
//
//     }
//
//
// };
//
//
//
//
//
// export const addnewpost = (postmessage) => {
//
//
//     let newpost = {
//         id: 5,
//         message: postmessage,
//         like: 0,
//
//     };
//
//     state.profilepage.postdata.push(newpost);
//     state.profilepage.textmypost = "";
//     renderall(state);
//
//
// };
//
//
//
// export const updatepost = (postetxt) => {//text from MYPOST
//
//
//     state.profilepage.textmypost = postetxt;
//     renderall(state);
//
// };
//
//
//
//
// export const subscribe = (observer) => {
//     renderall = observer;
//
// };
//
//
//



// import React from 'react';

//





// import {renderall} from "../Render";

// let store = {
//     _state: {
//
//         profilepage: {
//
//             postdata: [
//                 {
//                     id: 1,
//                     message: "today i in first time eated a dog shit, it was great, and me nowbody seen ",
//                     like: "1200"},
//                 {id: 2, message: "hi", like: "34",},
//                 {id: 3, message: "t is mt first podt", like: "0",},
//                 {id: 4, message: "all is worse", like: "0",},
//
//             ],
//
//
//             textmypost: ""
//
//
//         },
//
//
//         dialogspages: {
//
//             dialogsdata: [
//                 {id: "alina", name: "Alina",},
//                 {id: "bazil", name: "Bazil",},
//                 {id: "matsal", name: "Matsal",},
//                 {id: "herman", name: "Herman",},
//                 {id: "timur", name: "Timur",}
//             ],
//
//             messagesdata: [
//                 {id: "1", message: "hi",},
//                 {id: "2", message: "Hi gays",},
//                 {id: "3", message: "shit",},
//                 {id: "4", message: "hi i am herman",},
//                 {id: "5", message: "hi am timur",},
//             ],
//
//
//             // sitebar:[
//             //     {id: "1", secondname "Alina"},
//             //     {id: "2", secondname "Bazil"},
//             //     {id: "3", secondname "Herman"},
//             // ]
//
//
//         }
//
//
//     },
//     getState () {
//         return this._state;
//     },
//
//     renderall ()  {
//
//     },
//
//
//     addnewpost (postmessage) {
//
//
//         let newpost = {
//             id: 5,
//             message: postmessage,
//             like: 0,
//
//         };
//
//         this._state.profilepage.postdata.push(newpost);
//         this._state.profilepage.textmypost = "";
//         this.renderall(this.state);
//
//
//     },
//
//
//
//     updatepost (postetxt) {//text from MYPOST
//
//
//         this._state.profilepage.textmypost = postetxt;
//         this.renderall(this._state)
//
//     },
//
//
//
//
//     subscribe(observer) {
//         this.renderall = observer
//
//     },
//
// };
//
//
//
//
//
//
//
//
//
//
//
//
// window.store = store;
//
// export default store;