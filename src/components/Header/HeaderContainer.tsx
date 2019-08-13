import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import { logOutThunkCreator} from "../../redux/Auth-reducer";





class HeaderContainer extends React.Component <any> {



    render() {

        return (
            <Header {...this.props} />
        )
    }


}


const mapStateToProps = (state: any) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,

    }
};


export default connect <any, any, any>(mapStateToProps, {
    logOut:logOutThunkCreator})(HeaderContainer);

