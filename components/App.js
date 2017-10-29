import React, { Component } from 'react';
import ChannelSection from './channels/ChannelSection';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            channels: [],
            activeChannel: {}
        };
    }
    addChannel(name) {
        let { channels } = this.state;
        channels.push({ id: channels.length, name });
        this.setState({ channels });
    }
    setChannel(activeChannel) {
        this.setState({ activeChannel });
    }
    render() {
        return (
            <div className="container">
                <div className="nav">
                    <ChannelSection
                        {...this.state}
                        addChannel={this.addChannel.bind(this)}
                        setChannel={this.setChannel.bind(this)}
                    />
                </div>
            </div>
        )
    }
}

export default App