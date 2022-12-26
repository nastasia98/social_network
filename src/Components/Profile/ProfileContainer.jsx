import React from "react";
import Profile from "./Profile";
import {getProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator} from "../../Redux/profile-reducer";
import {connect} from "react-redux";
import {Navigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId
            if(!userId){
                this.props.history.push('/login')
            }
        }

        this.props.getProfileThunkCreator(userId)
        this.props.getStatusThunkCreator(userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}
                status={this.props.status} updateStatus={this.props.updateStatusThunkCreator}/>
            </div>)
    }

}

let mapStateToProps = (state) => {
    return{
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

const TakeParams = (props) => {
    return <AuthRedirectComponent {...props} params={useParams()} />
}

export default connect(mapStateToProps,
    {getProfileThunkCreator,
    getStatusThunkCreator,
    updateStatusThunkCreator})(TakeParams)