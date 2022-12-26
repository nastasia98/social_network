import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (<header className={s.header}>
        <img src="https://i.pinimg.com/originals/0e/cd/e6/0ecde62191acf70ebe09281e71f9b464.jpg" alt="Logo"/>
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div> {props.login} <button onClick={props.logout}>Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink>
            }
        </div>
    </header>)
}

export default Header;