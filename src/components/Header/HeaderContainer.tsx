import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {auhMeThunkCreator, logOutThunkCreator} from "../../redux/Auth-reducer";



interface Iprops {
    authMe: Function

}

class HeaderContainer extends React.Component <Iprops> {
    componentDidMount() {


        this.props.authMe()

    }


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


export default connect <any, any, any>(mapStateToProps, {authMe:auhMeThunkCreator,
    logOut:logOutThunkCreator})(HeaderContainer);

