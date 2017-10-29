import React, { Component } from 'react';
import PropTypes from 'prop-types';
import User from './User';

class UserList extends Component {
    render() {
        return (
            <div className="list-group list-group-flush">{
                this.props.users.map(user => {
                    return <User key={user.id} user={user} />
                })
            }</div>
        )
    }
}

UserList.propTypes = {
    users: PropTypes.array.isRequired
}

export default UserList