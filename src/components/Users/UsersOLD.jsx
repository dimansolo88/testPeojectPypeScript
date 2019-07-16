// /*
// import React from "react";
// import style from "./Users.module.css"
// import * as axios from "axios";
// import photos from "../../../assets/images/userPhoto.jpg"
//
//
// const Users = (props) => {
//
//     if (props.users.length === 0) {
//
//         axios.get("https://social-network.samuraijs.com/api/1.0/users")
//             .then(response => {
//                 props.setUsers(response.data.items)
//             })
//
//
//     }
//
//
//     return <div className={style.usersWrapper}>
//
//
//         {props.users.map(u => <div key={u.id}>
//
//             <div>
//                 <img src={u.photos.small != null ? u.photos.small : photos} alt="avatar" className={style.avatar}/>
//             </div>
//
//
//             <div>
//                 {u.followed ? <button onClick={() => {
//                         props.unfollU(u.id)
//                     }}> unfollow </button>
//                     : <button onClick={() => {
//                         props.follU(u.id)
//                     }}> follow </button>}
//             </div>
//
//             <div>
//                 {u.name}
//             </div>
//             {/!*<div>*!/}
//             {/!*    {u.lastName}*!/}
//             {/!*</div>*!/}
//             <div>
//                 {u.uniqueUrlName}
//             </div>
//             {/!*<div>*!/}
//             {/!*    {u.status}*!/}
//             {/!*</div>*!/}
//             {/!*<div>*!/}
//             {/!*    {u.location.city}*!/}
//             {/!*</div>*!/}
//             {/!*<div>*!/}
//             {/!*    {u.location.country}*!/}
//             {/!*</div>*!/}
//
//
//         </div>)}
//
//     </div>
//
//
// };
//
//
// export default Users
//
//
// // import React from "react";
// // import style from "./Users.module.css"
// //
// //
// // const Users = (props) => {
// //
// //
// //     // let follow = () => {
// //     //     props.folU(id)
// //     // };
// //     //
// //     //
// //     // let unfollow = (id) => {
// //     //     props.unfolU(id)
// //     // };
// //
// //     return <div className={style.usersWrapper}>
// //
// //
// //         {
// //             props.users.map(users => <div key={users.id}>
// //
// //                 <div>
// //                     <img src="http://i.imgur.com/Ax0Kfaj.jpg" alt="avatar" className={style.avatar}/>
// //                 </div>
// //
// //                 <div>
// //                     {users.followed ? <button onClick={() =>  {props.unfolU(users.id )}  } >unfollow</button>
// //                         : <button onClick={() => {props.folU(users.id)}   }>follow</button>}
// //
// //                 </div>
// //                 <div>
// //                     <div>
// //                         {users.firstName}
// //                     </div>
// //                     <div>
// //                         {users.lastName}
// //                     </div>
// //                     <div>
// //                         {users.status}
// //                     </div>
// //                     <div>
// //                         {users.location.city}
// //                     </div>
// //                     <div>
// //                         {users.location.country}
// //                     </div>
// //
// //
// //                 </div>
// //
// //
// //             </div>)
// //         }
// //
// //     </div>
// //
// //
// // };
// //
// //
// // export default Users;
//
//
// // props.setUsers({
// //         id: 1,
// //         followed: false,
// //         avatar: "http://i.imgur.com/Ax0Kfaj.jpg",
// //         firstName: "Alina",
// //         lastName: "Padshybiakina",
// //         status: "i am real love my family",
// //         location: {city: "New York", country: "USA"}
// //     },
// //     {
// //         id: 2,
// //         followed: false,
// //         avatar: "http://i.imgur.com/Ax0Kfaj.jpg",
// //         firstName: "Herman",
// //         lastName: "Padshybiakin",
// //         status: "I finished first class",
// //         location: {city: "Paris", country: "Fiance"}
// //     },
// //     {
// //         id: 3,
// //         followed: false,
// //         avatar: "http://i.imgur.com/Ax0Kfaj.jpg",
// //         firstName: "Timur",
// //         lastName: "Padshybiakin",
// //         status: "i am 2 years old",
// //         location: {city: "Berlin", country: "Germany"}
// //     },
// //     {
// //         id: 4,
// //         followed: false,
// //         avatar: "http://i.imgur.com/Ax0Kfaj.jpg",
// //         firstName: "King",
// //         lastName: "Padshybiakin",
// //         status: "iI like eat everything",
// //         location: {city: "Minsk", country: "Belarus"}
// //     },)
// //
// //
// //
// */
