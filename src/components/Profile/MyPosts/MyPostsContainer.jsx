import {addPost, updateNewPost} from "../../redux/profileReducer";
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
            dispatch(addPost())
        },
        postChange: (text) => {
            dispatch(updateNewPost(text))
        },
    }
};

const MyPostsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MyPosts);

export default MyPostsContainer;