import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Channel from './Channel';

class ChannelList extends Component {
    render() {
        const { setChannel } = this.props;
        return (
            <div className="list-group list-group-flush">{
                this.props.channels.map(channel => {
                    return <Channel key={channel.id} channel={channel} {...this.props} />
                })
            }</div>
        )
    }
}

ChannelList.propTypes = {
    channels: PropTypes.array.isRequired,
    setChannel: PropTypes.func.isRequired,
    activeChannel: PropTypes.object.isRequired
}

export default ChannelList