import userAPI from "../api/api";

const initialState = {
    posts: [
        {id: 1, message: "Hi, how are you", likesCount: "0"},
        {id: 2, message: "Hi, how are you", likesCount: "6"},
        {id: 3, message: "Hi, how are you", likesCount: "2"},
        {id: 4, message: "Hi, how are you", likesCount: "5"},
    ],
    profile: null,
    status: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST':
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {id: 55, message: action.post, likesCount: 0}
                ],
                newPostText: ''
            };
        case 'SET-PROFILE':
            return {
                ...state,
                profile: action.profile
            };
        case 'SET-PROFILE-STATUS':
            return {
                ...state,
                status: action.status
            };
        default:
            return state
    }
};

export const addPost = (post) => ({type: 'ADD-POST', post});
export const setProfile = (profile) => ({type: 'SET-PROFILE', profile});
export const setProfileStatus = (status) => ({type: 'SET-PROFILE-STATUS', status});

export const getProfile = (selectedId) => {
    return (dispatch) => {
        return userAPI.getProfile(selectedId).then(response => {
            dispatch(setProfile(response.data));
        })
    }
};
export const getProfileStatus = (selectedId) => {
    return (dispatch) => {
        return userAPI.getProfileStatus(selectedId).then(response => {
            dispatch(setProfileStatus(response));
        })
    }
};
export const updateProfileStatus = (selectedId) => {
    return (dispatch) => {
        return userAPI.getProfileStatus(selectedId).then(response => {
            dispatch(setProfileStatus(response));
        })
    }
};

export default profileReducer