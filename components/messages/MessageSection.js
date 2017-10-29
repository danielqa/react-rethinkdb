import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MessageForm from './MessageForm';
import MessageList from './MessageList';

class MessageSection extends Component {
    render() {
        let { activeChannel } = this.props;
        let activeChannelName = activeChannel.name ? activeChannel.name : 'Select a Channel';
        return (
            <div className="card bg-light border-info">
                <div className="card-header">
                    <strong>{activeChannelName}</strong>
                </div>
                <div className="card-body">
                    <MessageList {...this.props} />
                    <MessageForm {...this.props} />
                </div>
            </div>
        )
    }
}

MessageSection.propTypes = {
    messages: PropTypes.array.isRequired,
    activeChannel: PropTypes.object.isRequired,
    addMessage: PropTypes.func.isRequired
}

export default MessageSection