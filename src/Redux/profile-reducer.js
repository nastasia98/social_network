import {profileAPI, UsersAPI} from "../API/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
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
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: action.newPostText,
                likes: '0',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcmUgh2Qd29_B-Zw0UxC2OLTKryny9cB0Fyuw0sQhX8gJZLLK2ubTSmF1Q8-u6UpNs60A&usqp=CAU'
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.id)
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

export const addPostCreator = (newPostText) => ({type: ADD_POST, newPostText})

export const deletePost = (id) => ({type: DELETE_POST, id})

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const setStatus = (status) => ({type: SET_STATUS, status})

export const getProfileThunkCreator = (userId) => {
    return (dispatch) => {
        UsersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }
}

export const getStatusThunkCreator = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatusThunkCreator = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}


export default profileReducer;