import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./components/redux/state";
import MyPosts from "./components/Profile/MyPosts/MyPosts";

let reRenderEntireTree = (state) => {
    ReactDOM.render(
        <App appState={state}
                         addPost={store.addPost.bind(store)}
                         updateNewPostText={store.updateNewPostText.bind(store)} />,
        document.getElementById('root')
    );
};

reRenderEntireTree(store.getState());

store.subscribe(reRenderEntireTree);