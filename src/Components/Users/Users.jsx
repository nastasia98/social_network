import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = (props) => {

    return <div>
        <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                   totalItemsCount={props.totalUsersCount} pageSize={props.pageSize}
                   portionSize={10}/>

        {props.users.map(u => <User user={u} key={u.id}
                                    followingInProgress={props.followingInProgress}
                                    unfollowThunkCreator={props.unfollowThunkCreator}
                                    followThunkCreator={props.followThunkCreator}/>)}
    </div>
}

export default Users;