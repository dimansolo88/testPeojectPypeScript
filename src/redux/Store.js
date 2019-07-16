// import dialoReducer from "./dialogs-reducer";
// import profileReducer from "./profile-reducer";
//
// // let add_post = "ADD-POST";
// // let update_post = "UPDATE-POST";
// //
// // export const addpostActionCreator = () => ({
// //     type: add_post
// // });
// //
// //
// // export const updatepostActionCreator = (textposts) => ({
// //     type: update_post , postext: textposts
// //
// // });
// //
// // let send_message = "SEND-MESSAGE";
// // let update_message = "UPDATE-MESSAGE";
//
// // export const sendMessageCreator = () => ({
// //     type: send_message
// // });
// //
// // export const updateMessageCreator = (text) => ({
// //     type: update_message, textmessage: text
// //  });
//
//
//
//
//
//
//
// // import {renderall} from "../Render";
//
//
// let store = {
//     _state: {
//
//         profilepage: {
//
//             postdata: [
//                 {
//                     id: 1,
//                     message: "today i in first time eated a dog shit, it was great, and me nowbody seen ",
//                     like: "1200"
//                 },
//                 {id: 2, message: "hi", like: "34",},
//                 {id: 3, message: "t is mt first podt", like: "0",},
//                 {id: 4, message: "all is worse", like: "0",},
//
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
//             textmessage: "",
//
//
//         }
//
//         // sitebar:[
//         //     {id: "1", secondname "Alina"},
//         //     {id: "2", secondname "Bazil"},
//         //     {id: "3", secondname "Herman"},
//         // ]
//
//
//     },
//
//
//     callSubscriber() {
//
//     },
//
//     getState() {
//         return this._state
//     },
//
//     // addnewpost() {
//     //
//     //
//     //     let newpost = {
//     //         id: 5,
//     //         message: this._state.profilepage.textmypost,
//     //         like: 0,
//     //
//     //     };
//     //
//     //     this._state.profilepage.postdata.push(newpost);
//     //     this._state.profilepage.textmypost = "";
//     //     this.callSubscriber(this._state);
//     //
//     //
//     // },
//     //
//     // updatepost(postetxt) {//text from MYPOST
//     //
//     //
//     //     this._state.profilepage.textmypost = postetxt;
//     //     this.callSubscriber(this._state);
//     //
//     // },
//
//     subscribe(observer) {
//         this.callSubscriber = observer;
//
//     },
//
//     dispatch(action) {
//
//
//         this._state.dialogspages = dialoReducer(this._state.dialogspages,action);
//         this._state.profilepage  = profileReducer(this._state.profilepage, action);
//
//         //
//         // if (action.type === add_post) {
//         //     let newpost = {
//         //         id: 5,
//         //         message: this._state.profilepage.textmypost,
//         //         like: 0,
//         //
//         //     };
//         //
//         //     this._state.profilepage.postdata.push(newpost);
//         //     this._state.profilepage.textmypost = "";
//         //     this.callSubscriber(this._state);
//         // } else if (action.type === update_post) {
//         //
//         //     this._state.profilepage.textmypost = action.postext;
//         //     this.callSubscriber(this._state);
//         // } else if (action.type === update_message) {
//         //     this._state.dialogspages.textmessage = action.textmessage;
//         //     this.callSubscriber(this._state);
//         // } else if (action.type === send_message) {
//         //
//         //     let textmessage = this._state.dialogspages.textmessage;
//         //     this._state.dialogspages.textmessage = "";
//         //     this._state.dialogspages.messagesdata.push({id: 6, message: textmessage});
//         //     this.callSubscriber(this._state);
//         // }
//
//         this.callSubscriber(this._state);
//     }
//
// }
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
// export default store;
//
