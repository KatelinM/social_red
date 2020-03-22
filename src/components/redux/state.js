let store = {
    _state: {
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
    _callSubscriber() {

    },
    addPost() {
        this._state.profilePage.posts.push(
            {id: 55, message: this._state.profilePage.newPostText, likesCount: 0}
        );
        this._callSubscriber(this._state);
        this.updateNewPostText('')
    },
    updateNewPostText(text) {
        this._state.profilePage.newPostText = text ;
        this._callSubscriber(this._state)
    },
    subscribe(observer){
        this._callSubscriber = observer
    }
}

export default store