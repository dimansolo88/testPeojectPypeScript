import {connect} from "react-redux";
import React from "react";
import Users from "./Users";
import {
    followThunkCreator, setUserThunkCreator, unfollowThunkCreator
} from "../../redux/user-reducer";


interface Iprops {
    setUserThunkCreator: Function,
    currentPage: number,
    quantityUsersOnPage: number,
    users: any[],
    totalUsers: number,
    follU: Function,
    unfollU: Function,
    totalusersCount: number,
    isFetching: boolean,
    showPrealoderOnUsers: any,
    followingProgress: any[],
    toogleDiableBotton: any,
    followThunkCreator: Function,
    unfollowThunkCreator: Function,


}

interface IBla1 {
    a: number,

}
interface IBla2 {

    b: (c: number) => void
}
class BlaCom extends React.Component <IBla1 & IBla2> {
    render() { return <div></div>}
}

connect<IBla1, IBla2 >((state) => ({
    a: 3

}), (dispatch) => ({
    b: (c: number)=>{}
}))(BlaCom);

class UsersContanier extends React.Component <Iprops> {

    componentDidMount() {


        this.props.setUserThunkCreator(this.props.currentPage, this.props.quantityUsersOnPage);

    }


    onChanhePage = (pages: number) => {


        this.props.setUserThunkCreator(pages, this.props.quantityUsersOnPage);

    };


    render() {
        return <Users  {...this.props}  users={this.props.users} onChanhePage={this.onChanhePage}


        />


    }

}


// users={this.props.users}
// totalUsers={this.props.totalUsers}
// quantityUsersOnPage={this.props.quantityUsersOnPage}
// currentPage={this.props.currentPage}
// follU={this.props.follU}
// unfollU={this.props.unfollU}
// totalusersCount={this.props.totalusersCount}
// onChanhePage={this.onChanhePage}
// isFetching={this.props.isFetching}
// showPrealoderOnUsers={this.props.showPrealoderOnUsers}
// followingProgress={this.props.followingProgress}
// toogleDiableBotton={this.props.toogleDiableBotton}
// followThunkCreator={this.props.followThunkCreator}
// unfollowThunkCreator={this.props.unfollowThunkCreator}




const mapStateToProps = (state: any) => {
    return {
        users: state.usersPages.users,
        totalUsers: state.usersPages.totalUsers,
        quantityUsersOnPage: state.usersPages.quantityUsersOnPage,
        currentPage: state.usersPages.currentPage,
        isFetching: state.usersPages.isFetching,
        followingProgress: state.usersPages.followingProgress,



    }
};


export default  connect <any, any, any> (mapStateToProps, {
    setUserThunkCreator, followThunkCreator,
    unfollowThunkCreator
}) (UsersContanier);



