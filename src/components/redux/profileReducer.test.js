import React from 'react';
import profileReducer, {addPost, deletePost} from "./profileReducer";

it('length of posts should be incremented ', () => {
    //test data
    let state = {
        posts: [
            {id: 1, message: "Hi, how are you", likesCount: "0"},
            {id: 2, message: "Hi, how are you", likesCount: "6"},
            {id: 3, message: "Hi, how are you", likesCount: "2"},
            {id: 4, message: "Hi, how are you", likesCount: "5"},
        ],
    };
    let action = addPost('test post');
    //action
    let newState = profileReducer(state, action);
    //expectation
    expect(newState.posts.length).toBe(5)
});

it('new message should be \'test post', () => {
    //test data
    let state = {
        posts: [
            {id: 1, message: "Hi, how are you", likesCount: "0"},
            {id: 2, message: "Hi, how are you", likesCount: "6"},
            {id: 3, message: "Hi, how are you", likesCount: "2"},
            {id: 4, message: "hi", likesCount: "5"},
        ],
    };
    let action = addPost('test post');
    //action
    let newState = profileReducer(state, action);
    //expectation
    expect(newState.posts[4].message).toBe('test post')
    expect(newState.posts[4].likesCount).toBe(0)
});

it('length of posts should be decremented ', () => {
    //test data
    let state = {
        posts: [
            {id: 1, message: "Hi, how are you", likesCount: "0"},
            {id: 2, message: "Hi, how are you", likesCount: "6"},
            {id: 3, message: "Hi, how are you", likesCount: "2"},
            {id: 4, message: "Hi, how are you", likesCount: "5"},
        ],
    };
    let action = deletePost(1);
    //action
    let newState = profileReducer(state, action);
    //expectation
    expect(newState.posts.length).toBe(3)
});