import {addPostAC, updateNewPostAC} from "../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        data: state.profilePage
    }
};

const mapDispatchToProps = (dispatch) => {
    return { 
        addPost: () => {
            dispatch(addPostAC())
        },
        postChange: (text) => {
            dispatch(updateNewPostAC(text))
        },
    }
};

const MyPostsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MyPosts);

export default MyPostsContainer;