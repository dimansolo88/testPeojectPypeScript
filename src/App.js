import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
// import Profile from "./components/Profile/Profile";
// import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/Navbar/News/News";
import Music from "./components/Navbar/Music/Music";
import Settings from "./components/Navbar/Settings/Settings";
// import Sitebar from "./components/Navbar/Sitebar/Sitebar";
import DialogsContanier from "./components/Dialogs/DialogsContanier";
import UsersContanier from "./components/Users/UsersContanier";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
// import Sitebar from './components/Navbar/Sitebar/Sitebar';


const App = (props) => {

    // let postdata = [
    //     {id: 1, message: "today i in first time eated a dog shit, it was great, and me nowbody seen ", like: "1200"},
    //     {id: 2, message: "hi", like: "34",},
    //     {id: 2, message: "t is mt first podt", like: "0",},
    //
    //
    // ]


    return (

       // <BrowserRouter>
            <div className="app-wrapper">

                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">

                    {/*<Route path="/dialogs" component={Dialogs}/>*/}
                    {/*<Route path="/dialogs" render={ () =>*/}
                    {/*    <Dialogs dialogsdatan={props.astate.dialogspages} dispatch={props.dispatch} /> }/>*/}

                    <Route path="/dialogs" render={ () =>
                        <DialogsContanier  /> }/>

                    {/*state={props.astate.dialogspages} dispatch={props.dispatch}*/}

                    {/*state={props.astate.profilepage} dispatch={props.dispatch}*/}

                    {/*<Route path="/profile" component={Profile}/>*/}
                    <Route path="/profile/:userid?" render={ ()=> <ProfileContainer/>  }/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/users" render={ () => <UsersContanier />  }/>
                    <Route path="/login" render={ () => <Login />}  />


                    {/*profilepagest={props.astate.profilepage}*/}

                </div>




            </div>
        //</BrowserRouter>
    //b={props.a} cdv={props.cdx}
    );


}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
