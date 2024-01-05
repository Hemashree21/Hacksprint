import React, { Component } from 'react';
import Scheduler from '../components/Scheduler';
import Toolbar from '../components/Toolbar';
import Layout from '../components/Layout';

const data = [
    { start_date:'2024-01-5 10:00', end_date:'2024-01-6 18:00', text:'HackSprint', className: 'event' }
];

class Calender extends Component {
    state = {
        currentTimeFormatState: true,
        messages: []
    };

    addMessage(message) {
        const maxLogLength = 5;
        const newMessage = { message };
        const messages = [
            newMessage,
            ...this.state.messages
        ];

        if (messages.length > maxLogLength) {
            messages.length = maxLogLength;
        }
        this.setState({ messages });
    }

    handleTimeFormatStateChange = (state) => {
        this.setState({
            currentTimeFormatState: state
        });
    }

    render() {
        const { currentTimeFormatState } = this.state;
        return (
            <Layout>
            <div>
                <div className="tool-bar">
                    <Toolbar
                        timeFormatState={currentTimeFormatState}
                        onTimeFormatStateChange={this.handleTimeFormatStateChange}
                    />
                </div>
                <div className='scheduler-container'>
                    <Scheduler
                        events={data}
                        timeFormatState={currentTimeFormatState}
                        onDataUpdated={this.logDataUpdate}
                    />
                </div>
            </div>
            </Layout>
        );
    }
}
export default Calender;