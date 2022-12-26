import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Settings from "./Components/Settings/Settings";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import {BrowserRouter, Route, Routes} from "react-router-dom";
//import DialogsContainer from "./Components/Dialogs/DialogsContainer";

import UsersContainer from "./Components/Users/UsersContainer";
//import ProfileContainer from "./Components/Profile/ProfileContainer";

import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {connect, Provider} from "react-redux";
import {initialized} from "./Redux/app-reducer";
import Preloader from "./Components/common/Preloader/preloader";
import React, {Suspense} from "react";
import store from "./Redux/redux-store";

const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'));

class App extends React.Component {

    componentDidMount() {
        this.props.initialized()
    }

    render() {
        if (!this.props.initialized){
            return <Preloader />
        }

        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar state={this.props.store}/>
                    <div className='app-wrapper-content'>
                        <Suspense fallback={<div>Loading...{<Preloader />}</div>}>
                        <Routes>
                            <Route path='/profile' element={<ProfileContainer/>}/>
                            <Route path='/profile/:userId' element={<ProfileContainer store={this.props.store}/>}/>
                            <Route path='/dialogs/*' element={<DialogsContainer store={this.props.store}/>}/>
                            <Route path='/users' element={<UsersContainer store={this.props.store}/>}/>
                            <Route path='/news' element={<News/>}/>
                            <Route path='/music' element={<Music/>}/>
                            <Route path='/settings' element={<Settings/>}/>
                            <Route path='/login' element={<Login/>}/>
                        </Routes>
                        </Suspense>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
        userId: state.auth.id
    }
}

let AppContainer = connect(mapStateToProps, {initialized})(App);

const SamuraiJSApp = (props) =>{
    return <React.StrictMode>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </React.StrictMode>
}

export default SamuraiJSApp

