let reRenderEntireTree

let state = {
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
};

export let addPost = () => {
    state.profilePage.posts.push(
        {id: 55, message: state.profilePage.newPostText, likesCount: 0}
    )
    reRenderEntireTree(state)
    updateNewPostText('')
}

export let updateNewPostText = (text) => {
    state.profilePage.newPostText = text
    reRenderEntireTree(state)
}

export let subscribe = (observer) => {
    reRenderEntireTree = observer
}

export default state