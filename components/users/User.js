import React, { Component } from 'react';
import PropTypes from 'prop-types';

class User extends Component {
    render() {
        return (
            <span className="list-group-item">
                {this.props.user.name}
            </span>
        )
    }
}

User.propTypes = {
    user: PropTypes.object.isRequired
}

export default User