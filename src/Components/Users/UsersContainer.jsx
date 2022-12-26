import React from "react";
import {connect} from "react-redux";
import {
    followThunkCreator, getUsersThunkCreator,
    setCurrentPage,
    toggleIsFollowingProgress,
    unfollowThunkCreator
} from "./users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../Redux/users-selectors";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   followingInProgress={this.props.followingInProgress}
                   followThunkCreator={this.props.followThunkCreator}
                   unfollowThunkCreator={this.props.unfollowThunkCreator}/>
        < />
    }
}

/*let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}*/

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

let withRedirect = withAuthRedirect(UsersContainer)

/* let mapDispatchToProps = (dispatch) => {
    return{
        follow: (userId) => {dispatch( followAC(userId))},
        unfollow: (userId) => {dispatch( unfollowAC(userId))},
        setUsers: (users) => {dispatch(setUsersAC(users))},
        setCurrentPage: (currentPage) => {dispatch(setCurrentPageAC(currentPage))},
        setTotalCount: (totalCount) => {dispatch(setTotalCountAC(totalCount))},
        toggleIsFetching: (isFetching) => {dispatch(toggleIsFetchingAC(isFetching))}
    }
}

 */

export default compose(
    withAuthRedirect,
    connect(mapStateToProps,
    {
        setCurrentPage, toggleIsFollowingProgress,
        getUsers: getUsersThunkCreator,
        followThunkCreator, unfollowThunkCreator})
)(UsersContainer)