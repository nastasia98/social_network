import styles from './users.module.css'
import avatarPhoto from './../../assets/images/avatarPhoto.jpg'
import React from "react";
import {NavLink} from "react-router-dom";

let User = (props) => {
    return <div>
                <span>
                    <div>
                        <NavLink to={'./../profile/' + props.user.id}>
                            <img src={props.user.photos.small != null ? props.user.photos.small : avatarPhoto} alt="avatar"
                             className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {props.user.followed
                            ? <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                      onClick={() => {props.unfollowThunkCreator(props.user.id)}}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                      onClick={() => {props.followThunkCreator(props.user.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <div>{props.user.name}</div>
                     <div>{props.user.status}</div>
                </span>
                <span>
                    <div>{'user.location.country'}</div>
                     <div>{'user.location.city'}</div>
                </span>
            </div>
}

export default User;