import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MessageForm extends Component {
    onSubmit(e) {
        e.preventDefault();
        const node = this.refs.message;
        const message = node.value;
        this.props.addMessage(message);
        node.value = '';
    }
    render() {
        let input;
        if (this.props.activeChannel.id !== undefined) {
            input = (
                <input type="text" className="form-control" ref="message" placeholder="Add Message..." />
            )
        }
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                {input}
            </form>
        )
    }
}

MessageForm.propTypes = {
    activeChannel: PropTypes.object.isRequired,
    addMessage: PropTypes.func.isRequired
}

export default MessageForm