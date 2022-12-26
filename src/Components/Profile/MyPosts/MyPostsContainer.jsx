import React from "react";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPostCreator} from "../../../Redux/profile-reducer";

const mapStateToProps = (state) =>{
    return{
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        addPost: (newPostText) => {dispatch(addPostCreator(newPostText))}
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;