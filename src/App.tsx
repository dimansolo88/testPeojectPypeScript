import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import News from "./components/Navbar/News/News";
import Music from "./components/Navbar/Music/Music";
import Settings from "./components/Navbar/Settings/Settings";
import DialogsContanier from "./components/Dialogs/DialogsContanier";
import UsersContanier from "./components/Users/UsersContanier";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import { initiakisationThunkCreator} from "./redux/App-reducer";
import {compose} from "redux";
import Prealoder from "./components/Common/Ptrealoder";
import { initializedSelector } from './redux/app-Seektors';



interface Iprops {
    initAPP: Function,
    initialized: boolean,

}


class App extends Component <Iprops> {
    componentDidMount() {
        this.props.initAPP()

    }


    render() {


        if (!this.props.initialized) {
            return <Prealoder/>
        }



        return (


            <div className="app-wrapper">

                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">


                    <Route path="/dialogs" render={() =>
                        <DialogsContanier/>}/>

                    <Route path="/profile/:userid?" render={() => <ProfileContainer/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/users" render={() => <UsersContanier/>}/>
                    <Route path="/login" render={() => <Login/>}/>


                </div>

            </div>


        );


    }
}


const mapStateToProps = (state:any) => {
    return{
        initialized:initializedSelector(state)
    }
};


export default compose <any, any,any> (
    withRouter, connect (mapStateToProps, {initAPP:initiakisationThunkCreator})) (App);
