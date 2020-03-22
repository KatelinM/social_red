import profileReducer from "./profileReducer";

let store = {
    _state: { //data to component
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you", likesCount: "0"},
                {id: 2, message: "Hi, how are you", likesCount: "6"},
                {id: 3, message: "Hi, how are you", likesCount: "2"},
                {id: 4, message: "Hi, how are you", likesCount: "5"},
            ],
            newPostText: 'it',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Anna"},
                {id: 2, name: "Alex"},
                {id: 3, name: "Taylor"},
                {id: 4, name: "Swift"},
            ],
        }
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    _callSubscriber() {

    },

    dispatch(action) { //{type: 'ADD-POST'} callback to component
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._callSubscriber(this._state)
    },
}

export default store