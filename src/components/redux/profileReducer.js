const initialState = {
    posts: [
        {id: 1, message: "Hi, how are you", likesCount: "0"},
        {id: 2, message: "Hi, how are you", likesCount: "6"},
        {id: 3, message: "Hi, how are you", likesCount: "2"},
        {id: 4, message: "Hi, how are you", likesCount: "5"},
    ],
    newPostText: 'it',
    profile: null,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST':
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {id: 55, message: state.newPostText, likesCount: 0}
                ],
                newPostText: ''
            };
        case 'UPDATE-NEW-POST':
            return {
                ...state,
                newPostText: action.text
            };
        case 'SET-PROFILE':
            return {
                ...state,
                profile: action.profile
            };
        default:
            return state
    }
};

export const addPost = () => ({type: 'ADD-POST'});
export const updateNewPost = (text) => ({type: 'UPDATE-NEW-POST', text});
export const setProfile = (profile) => ({type: 'SET-PROFILE', profile});

export default profileReducer