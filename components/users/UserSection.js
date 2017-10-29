import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserForm from './UserForm';
import UserList from './UserList';

class UserSection extends Component {
    render() {
        return (
            <div className="card bg-light border-info">
                <div className="card-header">
                    <strong>Users</strong>
                </div>
                <UserList {...this.props} />
                <div className="card-body">
                    <UserForm {...this.props} />
                </div>
            </div>
        )
    }
}

UserSection.propTypes = {
    users: PropTypes.array.isRequired,
    setUserName: PropTypes.func.isRequired
}

export default UserSection