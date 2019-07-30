// import React from 'react';

import {addpostActionCreator} from "../../redux/profile-reducer";
import Mypost from "./Mypost";
import {connect} from "react-redux";


const mapStateToProps = (state: any) => {
    return {
        stated: state.profilepage
    }


};

const mapDispatchToProps = (dispatch: Function) => {

    return {
        add: (post: string) => {
            dispatch(addpostActionCreator(post));
        },


    }

};

const superMypostContanier = connect(mapStateToProps, mapDispatchToProps)(Mypost);


export default superMypostContanier;

