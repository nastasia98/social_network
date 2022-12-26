import {UsersAPI, UsersAPI as usersAPI} from "../../API/api";
import {updateObjectsInArray} from "../../utils/object-helper";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 19,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW://была повторяющаяся логика, см. object-helper в utils
            return {
                ...state,
                users: updateObjectsInArray(state.users, action.userId, "id", {followed: true})
            }
        /*users: state.users.map(u => {
               if (u.id === action.userId) {
                   return {...u, followed: true}
               }
               return u;
           })*/
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectsInArray(state.users, action.userId, "id", {followed: false})
            }
                /*users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })*/
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export const follow = (userId) => ({type: FOLLOW, userId})

export const unfollow = (userId) => ({type: UNFOLLOW, userId})

export const setUsers = (users) => ({type: SET_USERS, users})

export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})

export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, count: totalCount})

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const toggleIsFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})

export const getUsersThunkCreator = (page, pageSize) => async (dispatch) => {

    dispatch(toggleIsFetching(true))

    let data = await usersAPI.getUsers(page, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalCount(data.totalCount))
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    let data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsFollowingProgress(false, userId))
}

export const followThunkCreator = (userId) => async (dispatch) => {
    await followUnfollowFlow(dispatch, userId, UsersAPI.follow.bind(UsersAPI), follow)
}

export const unfollowThunkCreator = (userId) => async (dispatch) => {
    await followUnfollowFlow(dispatch, userId, UsersAPI.unfollow.bind(UsersAPI), unfollow)
}

export default usersReducer;