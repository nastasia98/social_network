import s from './Friends.module.css'
import FriendItem from "./FriendItem/FriendItem";
import {connect} from "react-redux";
import React from 'react';

class Friends extends React.Component {

    render() {
        let friendsElements = this.props.friends.map(f => <FriendItem name={f.name} />)
        return (
            <div className={s.friendsMain}>
                Friends
                <div>
                    {friendsElements}
                </div>
            </div>

        )
    }
}

let mapStateToProps = (state) => {
    return {
        friends: state.sidebar.friends
    }
}

export default connect(mapStateToProps, null)(Friends);