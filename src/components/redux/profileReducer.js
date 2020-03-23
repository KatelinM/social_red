const initialState = {
    posts: [
        {id: 1, message: "Hi, how are you", likesCount: "0"},
        {id: 2, message: "Hi, how are you", likesCount: "6"},
        {id: 3, message: "Hi, how are you", likesCount: "2"},
        {id: 4, message: "Hi, how are you", likesCount: "5"},
    ],
    newPostText: 'it',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST':
            state.posts.push(
                {id: 55, message: state.newPostText, likesCount: 0}
            );
            state.newPostText = '';
            return state;
        case 'UPDATE-NEW-POST':
            state.newPostText = action.text;
            return state;
        default:
            return state
    }
};

export const addPostAC = () => ({type: 'ADD-POST'})
export const updateNewPostAC = (text) => ({type: 'UPDATE-NEW-POST', text})

export default profileReducer