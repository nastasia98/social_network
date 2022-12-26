import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {logout} from "../../Redux/auth-reducer";
import {withNavigate} from "../../utils/help";
import {compose} from "redux";

class HeaderContainer extends React.Component {

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        userId: state.auth.id
    }
}
export default connect(mapStateToProps, {logout})(HeaderContainer);