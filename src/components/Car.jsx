import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'red'
        }
    }
    changeColor = () => {
        this.setState({
            color: 'blue'
        })
    }
    render() {

        return (
            <div>
                Have a door color: {this.state.color} or {this.props.colorDoor}
                <button onClick={this.changeColor}>change color</button>
            </div>
        );
    }
}

export default Home;