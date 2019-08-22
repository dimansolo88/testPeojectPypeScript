import { dialogAPI } from "../API/API";

let send_message = "SEND-MESSAGE";
// let update_message = "UPDATE-MESSAGE";
let GET_DIALOGS_SUCCESS = "GET_DIALOGS";
let PUT_UP_DIALOG = "PUT_UP_DIALOG";
let SET_SELECT_DIALOG_ID = "SET_SELECT_DIALOG_ID";
let GET_MESSAGES_SUCCESS ="GET_MESSAGES_SUCCESS";


let initialstate = {

    dialogsdata: [
        // {id: "alina", name: "Alina", avatar: "http://i.imgur.com/Ax0Kfaj.jpg"},
        // {id: "bazil", name: "Bazil", avatar: "http://i.imgur.com/Ax0Kfaj.jpg"},
        // {id: "matsal", name: "Matsal", avatar: "http://i.imgur.com/Ax0Kfaj.jpg"},
        // {id: "herman", name: "Herman", avatar: "http://i.imgur.com/Ax0Kfaj.jpg"},
        // {id: "timur", name: "Timur", avatar: "http://i.imgur.com/Ax0Kfaj.jpg"}
    ],

    messagesdata: [
        // {id: "1", message: "hi",},
        // {id: "2", message: "Hi gays",},
        // {id: "3", message: "shit",},
        // {id: "4", message: "hi i am herman",},
        // {id: "5", message: "hi am timur",},
    ],


    // textmessage: "",

    selectDialogID: null,


};


const dialoReducer = (state = initialstate, action: any) => {


    switch (action.type) {
            //    case update_message:
            //
            // return {
            //     ...state,
            //     textmessage: action.textmessage
            // };

        case GET_DIALOGS_SUCCESS:
            return {
                ...state,dialogsdata:action.payload
            };

        case PUT_UP_DIALOG:
            // return {
            //     ...state,dialogsdata: [state.dialogsdata.find((d:{id:any}) => d.id == action.userId)],
            //         ...state.dialogsdata.filter((d:{id:any}) => d.id != action.userId)
            // };

            return {
                ...state, dialogsdata: [state.dialogsdata.find((d:{id:any}) => d.id == action.userId),
                    ...state.dialogsdata.filter((d: {id:any}) => d.id != action.userId)]
            };

        case SET_SELECT_DIALOG_ID:
            return {
                ...state,selectDialogID: action.payload
            };

        case GET_MESSAGES_SUCCESS:
            return {
                ...state,messagesdata: action.payload
            };

        case send_message:
            // let textmessage = action.message;
            return {
                ...state,
                // textmessage: "",
                messagesdata:[...state.messagesdata,action.payload]
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


export const sendMessageCreator = (message: string) => ({
    type: send_message, payload: message
});

export const getDialogsSuccessActionCreator = (data:[]) => ({
    type:GET_DIALOGS_SUCCESS, payload:data
});

// export const updateMessageCreator = (text) => ({
//     type: update_message, textmessage: text
// });


export const putUpActionCreator = (userId:any) => ({
    type: PUT_UP_DIALOG, userId
})


export const selectDialogActionCreator = (userId:number)=> ({
    type:SET_SELECT_DIALOG_ID, payload:userId
})

export const getMessagesSuccessActionCreator = (messages: string) => ({
    type:GET_MESSAGES_SUCCESS, payload:messages
})


export const getDialogsThunkCreator = () => async (dispatch: Function) => {
   let data = await dialogAPI.getDialogs();
   dispatch(getDialogsSuccessActionCreator(data))


};


export const startDialogThunkCreator = (userId:any) => async (dispatch:Function, getState:Function) => {
    return await dialogAPI.startDialog(userId);
    const dialogs = getState().dialogspages.dialogsdata.find((d: { id: any; }) => d.id = userId );
    if(dialogs)
        dispatch(putUpActionCreator(userId));
    else
        getDialogsThunkCreator()
}


export const getMessagesThunkCreator = (userId:number) => async (dispatch:Function) => {
    let messages =  await dialogAPI.getMessages(userId);
    dispatch(getMessagesSuccessActionCreator(messages))
}

export const sendMessageThunkCreator = (userId:any, body:string) => async (dispatch:Function) => {
    let message =  await dialogAPI.sendMessages(userId,body)
    if (message.resultCode == 0) {
        dispatch(sendMessageCreator(message.data.message))
        dispatch(putUpActionCreator(userId))
    }

}





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
