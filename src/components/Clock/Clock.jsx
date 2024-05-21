import React, { Component } from 'react';


function formatDate(date) {
    if (!date) return ''
    const hours = `0${date.getHours()}`.slice(-2)
    const minutes = `0${date.getMinutes()}`.slice(-2)
    const seconds = `0${date.getSeconds()}`.slice(-2)
    return `${hours}:${minutes}:${seconds}`
}


class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            timeString: ''
        }
    }
    componentDidMount() {
        this.Interval = setInterval(() => {
            const now = new Date()
            const newTimeString = formatDate(now)
            this.setState({
                timeString: newTimeString
            })
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.Interval)
    }
    render() {
        return (
            <div>
                {this.state.timeString}
            </div>
        );
    }
}

export default Clock;