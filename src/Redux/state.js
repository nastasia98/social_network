import profileReducer from "./profile-reducer";
import messagesReducer from "./message-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [{
                id: 1,
                message: 'Hi, how are you?',
                likes: '5',
                avatar: 'https://kartinkin.net/uploads/posts/2022-02/thumbs/1645098283_34-kartinkin-net-p-kartinki-sticha-34.jpg'
            }, {
                id: 2,
                message: "It's my first post",
                likes: '15',
                avatar: 'https://thypix.com/wp-content/uploads/2021/04/panda-for-drawing-36-700x700.jpg'
            }],
            newPostText: 'Nastasia',
        },
        messagesPage: {
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
            ],
            newMessageBody: '',
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Ksenya'},
                {id: 2, name: 'Dasha'},
                {id: 3, name: 'Volodya'}
            ]
        }
    },
    _callSubscriber() {

    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
}

window.store = store

export default store;