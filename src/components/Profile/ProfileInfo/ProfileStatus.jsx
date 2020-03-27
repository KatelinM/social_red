import React, {Component} from "react";

class ProfileStatus extends Component {
    state = {editMode: false};

    toggleEditMode() {
        this.setState({editMode: !this.state.editMode})
    };

    render() {

        return (
            <>
                <div>
                    {
                        this.state.editMode ?
                            <input autoFocus type="text" value={this.props.status} onBlur={this.toggleEditMode.bind(this)}/> :
                            <span onClick={this.toggleEditMode.bind(this)}>{this.props.status}</span>
                    }
                </div>
            </>
        )
    }
}

export default ProfileStatus