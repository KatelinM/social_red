import React, {Component} from "react";
import userAPI from "../../api/api";

class ProfileStatus extends Component {
    state = {editMode: false};

    onEditMode() {
        this.setState({editMode: true})
    };

    offEditMode() {
        this.setState({editMode: false})
    };

    render() {
        userAPI.updateProfileStatus('5555555555')
        return (
            <>
                <div>
                    {
                        this.state.editMode ?
                            <input autoFocus type="text" value={this.props.status || '------'} onBlur={this.offEditMode.bind(this)}/> :
                            <span onClick={this.onEditMode.bind(this)}>{this.props.status || '------'}</span>
                    }
                </div>
            </>
        )
    }
}

export default ProfileStatus