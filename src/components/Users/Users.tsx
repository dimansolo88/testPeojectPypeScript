import React from "react";
import style from "./Users.module.css"
// import * as axios from "axios";
import photos from "../../assets/images/userPhoto.jpg"
import Prealoder from "../Common/Ptrealoder";
import {NavLink} from "react-router-dom";
// import * as axios from 'axios';


interface Iprops {
    totalUsers: number,
    quantityUsersOnPage: number,
    isFetching: boolean,
    onChanhePage: Function,
    currentPage: number,
    users: any[],
    followingProgress: any[],
    followThunkCreator: Function,
    unfollowThunkCreator: Function
}


const Users = (props: Iprops) => {

    let quantityUsersPages = Math.ceil(props.totalUsers / props.quantityUsersOnPage);

    let quantityPages = [];
    for (let i = 1; i <= quantityUsersPages; i++) {
        quantityPages.push(i)
    }


    return <div className={style.usersWrapper}>

        <div>
            {props.isFetching ? <Prealoder/> : null}
        </div>


        <div className={style.pageHover}>


            {quantityPages.map((pages:number) => {
                return <span key={pages} onClick={() => {
                    props.onChanhePage(pages)
                }}
                             className={props.currentPage ===
                             pages ? style.numberLInk : ""}> {pages} </span>
            })}


        </div>


        {props.users.map((u) => <div key={u.id}>

            <div>

                <NavLink to={"/profile/" + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : photos} alt="avatar" className={style.avatar}/>

                </NavLink>

            </div>


            <div>

                {u.followed ? <button disabled={props.followingProgress.some((id:number) => id === u.id)}
                                      onClick={() => {


                                          props.unfollowThunkCreator(u.id)


                                      }}> unfollow </button> :
                    <button disabled={props.followingProgress.some((id: number) => id === u.id)}
                            onClick={() => {


                                props.followThunkCreator(u.id)


                            }}> follow </button>}


            </div>

            <div>
                {u.name}
            </div>

            <div>
                {u.uniqueUrlName}
            </div>
            <div>
                {u.status}
            </div>


        </div>)}

    </div>


};


export default Users;