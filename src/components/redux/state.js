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
        switch (action.type) {
            case 'ADD-POST':
                this._state.profilePage.posts.push(
                    {id: 55, message: this._state.profilePage.newPostText, likesCount: 0}
                );
                this._callSubscriber(this._state);
                this._state.profilePage.newPostText = '';
                break;
            case 'UPDATE-NEW-POST':
                this._state.profilePage.newPostText = action.text;
                this._callSubscriber(this._state)
                break;
            default:
                alert("Нет таких значений");
        }
    },
}

export const addPostAC = () => ({ type: 'ADD-POST' })
export const updateNewPostAC = (text) => ({ type: 'UPDATE-NEW-POST', text })

export default store