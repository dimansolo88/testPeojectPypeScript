let send_message = "SEND-MESSAGE";
let update_message = "UPDATE-MESSAGE";


let initialstate = {

    dialogsdata: [
        {id: "alina", name: "Alina", avatar: "http://i.imgur.com/Ax0Kfaj.jpg"},
        {id: "bazil", name: "Bazil", avatar: "http://i.imgur.com/Ax0Kfaj.jpg"},
        {id: "matsal", name: "Matsal", avatar: "http://i.imgur.com/Ax0Kfaj.jpg"},
        {id: "herman", name: "Herman", avatar: "http://i.imgur.com/Ax0Kfaj.jpg"},
        {id: "timur", name: "Timur", avatar: "http://i.imgur.com/Ax0Kfaj.jpg"}
    ],

    messagesdata: [
        {id: "1", message: "hi",},
        {id: "2", message: "Hi gays",},
        {id: "3", message: "shit",},
        {id: "4", message: "hi i am herman",},
        {id: "5", message: "hi am timur",},
    ],


    // textmessage: "",


};


const dialoReducer = (state = initialstate, action) => {


    switch (action.type) {
        case update_message:

            return {
                ...state,
                textmessage: action.textmessage
            };


        case send_message:
            let textmessage = action.message;
            return {
                ...state,
                // textmessage: "",
                messagesdata: [...state.messagesdata, {id: 6, message: textmessage}]
            };

        // stateCopy.textmessage = "";
        // stateCopy.messagesdata.push({id: 6, message: textmessage});


        default:
            return state;
    }

};

//      if (action.type === update_message) {
//         state.textmessage = action.textmessage;
//
//     } else if (action.type === send_message) {
//
//         let textmessage = state.textmessage;
//         state.textmessage = "";
//         state.messagesdata.push({id: 6, message: textmessage});
//
//     }
//
//
// return state


export const sendMessageCreator = (message) => ({
    type: send_message, message
});

export const updateMessageCreator = (text) => ({
    type: update_message, textmessage: text
});


export default dialoReducer;


// let send_message = "SEND-MESSAGE";
// let update_message = "UPDATE-MESSAGE";
//
//
//
//
//
//
// let initialstate = {
//
//     dialogsdata: [
//         {id: "alina", name: "Alina",},
//         {id: "bazil", name: "Bazil",},
//         {id: "matsal", name: "Matsal",},
//         {id: "herman", name: "Herman",},
//         {id: "timur", name: "Timur",}
//     ],
//
//     messagesdata: [
//         {id: "1", message: "hi",},
//         {id: "2", message: "Hi gays",},
//         {id: "3", message: "shit",},
//         {id: "4", message: "hi i am herman",},
//         {id: "5", message: "hi am timur",},
//     ],
//
//
//     textmessage: "",
//
//
// };
//
//
//
//
//
// const dialoReducer = (state = initialstate, action) => {
//
//     switch (action.type) {
//         case update_message:
//             state.textmessage = action.textmessage;
//             return state;
//         case send_message:
//             let textmessage = state.textmessage;
//             state.textmessage = "";
//             state.messagesdata.push({id: 6, message: textmessage});
//             return state;
//         default:
//             return state;
//     }
//
//
//
// //      if (action.type === update_message) {
// //         state.textmessage = action.textmessage;
// //
// //     } else if (action.type === send_message) {
// //
// //         let textmessage = state.textmessage;
// //         state.textmessage = "";
// //         state.messagesdata.push({id: 6, message: textmessage});
// //
// //     }
// //
// //
// // return state
//
//
// };
//
//
//
//
//
// export const sendMessageCreator = () => ({
//     type: send_message
// });
//
// export const updateMessageCreator = (text) => ({
//     type: update_message, textmessage: text
// });
//
//
// export default dialoReducer;
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
