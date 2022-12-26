import React from "react";
import {sendMessageCreator} from "../../Redux/message-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return{
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
        newMessageBody: state.messagesPage.newMessageBody,
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        sendMessage: (newMessageBody) => {dispatch(sendMessageCreator(newMessageBody))}
    }
}

const DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)(Dialogs)
//connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent); //настроили коннект двумя функциями

export default DialogsContainer;