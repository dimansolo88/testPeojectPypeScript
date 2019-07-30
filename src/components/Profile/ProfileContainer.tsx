import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfileStatusThunkCreator,
    profileInfoThunkCreator,
    updateProfileStatusThunkCreator
} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
// import {WithAthREdirect} from "../HOC/RedirectComponent";
import {compose} from "redux";

interface Iprops {

    match: any,
    profileInfo: Function,
    getStatus: Function,



}



class ProfileContainer extends React.Component <Iprops> {

    componentDidMount() {


        let userid = this.props.match.params.userid;
        if (!userid) {
            userid = 1068

        }


        this.props.profileInfo(userid);
        this.props.getStatus(userid);

    }


    render() {
        return (
            <Profile  {...this.props}  />

        )


    }

}




let mapStateToProps = (state: any) => {
    return {
        setProfileUser: state.profilepage.setProfileUs,
        isAuth: state.auth.isAuth,
        status: state.profilepage.status,
        isFetching:state.profilepage.isFetching,


    }

};

export default compose <any, any, any> (
    connect (mapStateToProps, {profileInfo: profileInfoThunkCreator,
        getStatus: getProfileStatusThunkCreator,updateStatus: updateProfileStatusThunkCreator}),
    withRouter,
    // WithAthREdirect
)(ProfileContainer);


// let withURL = withRouter(redirect);
//
// export default connect(mapStateToProps, {profileInfo: profileInfoThunkCreator})    (withURL);



