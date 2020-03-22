const profileReducer = (state, action) => {
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

export const addPostAC = () => ({ type: 'ADD-POST' })
export const updateNewPostAC = (text) => ({ type: 'UPDATE-NEW-POST', text })

export default profileReducer