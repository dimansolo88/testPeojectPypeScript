import React from "react";
import style from './ProfileInfo.module.css';
import Prealoder from "../../Common/Ptrealoder";
import photos from '../../../assets/images/userPhoto.jpg'
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {


    if (!props.setProfileUser) {  // to fix
        return <Prealoder/>
    }


    return (
        <div className={style.info}>




            <div>

                <img src={props.setProfileUser.photos.large != null ? props.setProfileUser.photos.large
                    : photos} alt="ProfilePhoto"/>
                    <ProfileStatus {...props}  />

                <span className={style.web}>

                    FullName:
                </span>

                <span>
                         {props.setProfileUser.fullName}
                </span>


            </div>

            <div>

                <span className={style.web}>

                    aboutMe:

                </span>

                <span>
                    {props.setProfileUser.aboutMe}

                </span>

                <div>
                    <span className={style.web}>
                        lookingForAJob:
                    </span>

                    <span>
                        {props.setProfileUser.lookingForAJob != null ? "I am not locking for any job "
                            : props.setProfileUser.lookingForAJob}
                    </span>
                </div>

                <div>


                    <span className={style.web}>
                        Web Site:
                    </span>

                    <span>
                         {props.setProfileUser.contacts.website = !null ?
                             "нет веб сайта" : props.setProfileUser.contacts.website}
                    </span>
                </div>


            </div>

            <div>

                <span className={style.web}>
                    Instagram:

                </span>
                <span>
                    {props.setProfileUser.contacts.instagram}
                </span>

                <div>
                    <span className={style.web}>
                     github:

                </span>

                    <span>
                    {props.setProfileUser.contacts.github}
                </span>
                </div>


            </div>


        </div>
    );
};


export default ProfileInfo;