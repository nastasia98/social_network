const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Nastasia'},
        {id: 2, name: 'Ksenya'},
        {id: 3, name: 'Volodya'},
        {id: 4, name: 'Mama'},
        {id: 5, name: 'Dasha'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: "I'm ok"},
        {id: 4, message: 'And you?'},
        {id: 5, message: 'I am fine too'}
    ]
}

const messagesReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            }
        default:
            return state
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default messagesReducer;