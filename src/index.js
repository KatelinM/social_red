import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state, {addPost, subscribe} from "./components/redux/state";

let reRenderEntireTree = (state) => {
    ReactDOM.render(<App appState={state} addPost={addPost} />, document.getElementById('root'));
};

reRenderEntireTree(state);
subscribe(reRenderEntireTree)