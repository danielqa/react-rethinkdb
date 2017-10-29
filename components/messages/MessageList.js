import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

class MessageList extends Component {
    render() {
        return (
            <div className="list-group list-group-flush">{
                this.props.messages.map(message => {
                    return <Message key={message.id} message={message} />
                })
            }</div>
        )
    }
}

MessageList.propTypes = {
    messages: PropTypes.array.isRequired
}

export default MessageList