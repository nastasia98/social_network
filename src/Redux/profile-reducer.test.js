import profileReducer, {addPostCreator, deletePost, setStatus, setUserProfile} from "./profile-reducer";
import React from "react";

let state = {
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

it('length of post should be incremented', () => {

    let action = addPostCreator('test-post');
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3);
})

it('message of new post should be correct', () => {

    let action = addPostCreator('test-post');
    let newState = profileReducer(state, action);
    expect(newState.posts[2].message).toBe('test-post');
})

it('after deleting length of post should be decremented', () => {

    let action = deletePost(2);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(1);
})

it('status should be changed',() => {
    let action = setStatus('test-status');
    let state = {status: ""}
    let newState = profileReducer(state, action);
    expect(newState.status).toBe('test-status')
})

it('profile should be added',() => {
    let action = setUserProfile('something');
    let state = {profile: null}
    let newState = profileReducer(state, action);
    expect(newState.profile).toBe('something')
})