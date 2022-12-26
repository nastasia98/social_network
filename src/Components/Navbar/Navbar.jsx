import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import SelectedLink from "./SelectedLink";
import Friends from "../Friends/Friends";

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to='/profile' className={SelectedLink()}>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs' className={SelectedLink()}>Messages</NavLink>
            </div>
            <div>
                <NavLink to='/news' className={SelectedLink()}>News</NavLink>
            </div>
            <div>
                <NavLink to='/music' className={SelectedLink()}>Music</NavLink>
            </div>
            <div>
                <NavLink to='/settings' className={SelectedLink()}>Settings</NavLink>
            </div>
            <div>
                <NavLink to='/users' className={SelectedLink()}>Users</NavLink>
            </div>
            <div>
                <Friends />
            </div>
        </nav>)
}

export default Navbar;