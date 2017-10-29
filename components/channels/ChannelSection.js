import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChannelForm from './ChannelForm';
import ChannelList from './ChannelList';

class ChannelSection extends Component {
    render() {
        return (
            <div className="card bg-light border-info">
                <div className="card-header">
                    <strong>Channels</strong>
                </div>
                <ChannelList {...this.props} />
                <div className="card-body">
                    <ChannelForm {...this.props} />
                </div>
            </div>
        )
    }
}

ChannelSection.propTypes = {
    channels: PropTypes.array.isRequired,
    setChannel: PropTypes.func.isRequired,
    addChannel: PropTypes.func.isRequired,
    activeChannel: PropTypes.object.isRequired
}

export default ChannelSection