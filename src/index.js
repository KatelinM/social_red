import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./components/redux/state";

let reRenderEntireTree = (state) => {
    ReactDOM.render(
        <App appState={state}
             dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
};

reRenderEntireTree(store.getState());

store.subscribe(reRenderEntireTree);