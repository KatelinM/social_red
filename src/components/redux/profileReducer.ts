import userAPI from "../api/api";

type initialStateType = {
    posts: any,
    profile: object | null,
    status: string,
    newPostText: string,

};

const initialState: initialStateType = {
    posts: [
        {id: 1, message: "Hi, how are you", likesCount: "0"},
        {id: 2, message: "Hi, how are you", likesCount: "6"},
        {id: 3, message: "Hi, how are you", likesCount: "2"},
        {id: 4, message: "Hi, how are you", likesCount: "5"},
    ],
    profile: null,
    status: '',
    newPostText: '',
};

const profileReducer = (state = initialState, action: any): initialStateType => {
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
        case 'DELETE-POST':
            return {
                ...state,
                posts: state.posts.filter((post: any) => post.id !== action.id),
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

type addPostType = {
    type: 'ADD-POST',
    post: object
}

export const addPost = (post: any):addPostType => ({type: 'ADD-POST', post});
export const deletePost = (id: any) => ({type: 'DELETE-POST', id});
export const setProfile = (profile: any) => ({type: 'SET-PROFILE', profile});
export const setProfileStatus = (status: any) => ({type: 'SET-PROFILE-STATUS', status});

export const getProfile = (selectedId: any) => {
    return async (dispatch: any) => {
        const response = await userAPI.getProfile(selectedId);
        dispatch(setProfile(response.data));
    }
};
export const getProfileStatus = (selectedId: any) => {
    return async (dispatch: any) => {
        const response = await userAPI.getProfileStatus(selectedId);
        dispatch(setProfileStatus(response));
    }
};
export const updateProfileStatus = (selectedId: any) => {
    return async (dispatch: any) => {
        const response = await userAPI.getProfileStatus(selectedId)
        dispatch(setProfileStatus(response));
    }
};

export default profileReducer