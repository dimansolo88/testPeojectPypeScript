import {profileAPI} from "../API/API";
let add_post = "ADD-POST";
// let update_post = "UPDATE-POST";
// import users from "../assets/images/photoUsersPost.jpg"
let setProfileUser = "SET-PROFILE-USER";
let setUserStatus = "SET-PROFILE-STATUS";;
let showPrealoder = "SHOW-PREALODER";


let initialstate = {

    postdata: [
        {
            id: 1,
            avatar: "https://www.meme-arsenal.com/memes/3a75d4f2bb6ed66a449fdb8d7836712b.jpg",
            message: "today i in first time eated a dog shit, it was great, and me nowbody seen ",
            like: "1200"
        },
        {
            id: 2,
            avatar: "https://www.meme-arsenal.com/memes/3a75d4f2bb6ed66a449fdb8d7836712b.jpg",
            message: "hi",
            like: "34",
        },
        {
            id: 3,
            avatar: "https://www.meme-arsenal.com/memes/3a75d4f2bb6ed66a449fdb8d7836712b.jpg",
            message: "t is mt first podt",
            like: "0",
        },
        {
            id: 4,
            avatar: "https://www.meme-arsenal.com/memes/3a75d4f2bb6ed66a449fdb8d7836712b.jpg",
            message: "all is worse",
            like: "0",
        },


    ],


    textmypost: "jjj",

    setProfileUs: null,

    status: "",

    isFetching: false,


};


const profileReducer = (state = initialstate, action) => {

    // let stateCopy;

    switch (action.type) {
        case add_post:
            let newpost = {
                id: 5,
                message: action.post,
                like: 0,
                avatar: "https://www.meme-arsenal.com/memes/3a75d4f2bb6ed66a449fdb8d7836712b.jpg",

            };

            return {
                ...state,
                postdata: [...state.postdata, newpost],
                // stateCopy.postdata.push(newpost);
                textmypost: ""
            };
        // return stateCopy;

        // case update_post:
        //     return {
        //         ...state,
        //         textmypost: action.postext
        //     };
        // return stateCopy;

        case setProfileUser:
            return {
                ...state, setProfileUs: action.profile
            };

        case setUserStatus:
            return {
                ...state, status: action.status
            };


        case showPrealoder:
            return {
                ...state, isFetching: action.isFetching
            };

        default:
            return state;


    }
};

// if (action.type === add_post) {
//     let newpost = {
//         id: 5,
//         message: state.textmypost,
//         like: 0,
//
//     };
//
//     state.postdata.push(newpost);
//     state.textmypost = "";
//
// } else if (action.type === update_post) {
//
//     state.textmypost = action.postext;
//
//
//
//
// }
//
//
// return state;


export const addpostActionCreator = (post) => ({
    type: add_post, post
});


// export const updatepostActionCreator = (textposts) => ({
//     type: update_post, postext: textposts
//
// });

export const setProfileU = (profile) => ({type: setProfileUser, profile});

export const setProfileStatus = (status) => ({type: setUserStatus, status});

export const showPrealoderAC = (isFetching) => ({type:showPrealoder, isFetching });


export const profileInfoThunkCreator = (userid) => {
    return (dispatch) => {
        profileAPI.profileInfo(userid)
            .then(response => {
                dispatch(setProfileU(response.data))


            })

    }
};

export const getProfileStatusThunkCreator = (userid) => {
    return (dispatch) => {

        profileAPI.getProfileStatus(userid)
            .then(response => {

                dispatch(setProfileStatus(response.data))
            })
    }
};

export const updateProfileStatusThunkCreator = (status) => (dispatch) => {
    dispatch(showPrealoderAC(true));

    profileAPI.updateProfileStatus(status)
        .then(response => {
            dispatch(showPrealoderAC(false));

            if (response.data.resultCode === 0) {
                dispatch(setProfileStatus(status));
            }
        })
};


export default profileReducer;


// let add_post = "ADD-POST";
// let update_post = "UPDATE-POST";
//
//
// let initialstate = {
//
//     postdata: [
//         {
//             id: 1,
//             message: "today i in first time eated a dog shit, it was great, and me nowbody seen ",
//             like: "1200"
//         },
//         {id: 2, message: "hi", like: "34",},
//         {id: 3, message: "t is mt first podt", like: "0",},
//         {id: 4, message: "all is worse", like: "0",},
//
//
//     ],
//
//
//     textmypost: "jjjj"
//
//
// };
//
//
// const profileReducer = (state = initialstate, action) => {
//
//     switch (action.type) {
//         case add_post:
//             let newpost = {
//                 id: 5,
//                 message: state.textmypost,
//                 like: 0,
//
//             };
//             let stateCopy = {...state};
//
//             state.postdata.push(newpost);
//             state.textmypost = "";
//             return state;
//
//         case update_post:
//             state.textmypost = action.postext;
//             return state;
//
//         default:
//             return state;
//
//
//     }
//
//
//     // if (action.type === add_post) {
//     //     let newpost = {
//     //         id: 5,
//     //         message: state.textmypost,
//     //         like: 0,
//     //
//     //     };
//     //
//     //     state.postdata.push(newpost);
//     //     state.textmypost = "";
//     //
//     // } else if (action.type === update_post) {
//     //
//     //     state.textmypost = action.postext;
//     //
//     //
//     //
//     //
//     // }
//     //
//     //
//     // return state;
// };
//
//
// export const addpostActionCreator = () => ({
//     type: add_post
// });
//
//
// export const updatepostActionCreator = (textposts) => ({
//     type: update_post, postext: textposts
//
// });
//
//
// export default profileReducer;