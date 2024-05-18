import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'red',
            show: true
        }
    }
    // changeColor = () => {
    //     this.setState({
    //         color: 'blue'
    //     })
    // }
    // componentDidMount() {
    //     setTimeout(() => {   
    //         this.setState({
    //             color: 'green'
    //         })
    //     }, 2000);
    // }
    // getSnapshotBeforeUpdate(prevProp, prevState) {
    //     console.log('prev state:', prevState.color);
    // }

    // static getDerivedStateFromProps(props, state) {
    //     return { color: props.colorDoor };
    // }

    // shouldComponentUpdate() {
    //     return false
    // }

    Delete = () => {
        this.setState({
            show: false
        })
    }
    render() {
        let myheader;
        if (this.state.show) {
            myheader = <Child />
        }
        return (
            <div>
                {myheader}
                <button onClick={this.Delete}>Delete</button>
            </div>
        );
    }
}

class Child extends Component {
    componentWillUnmount() {
        alert('The component named Header is about to be unmounted.')
    }
    render() {
        return (
            <div>
                <h1>Hello World</h1>
            </div>
        );
    }
}

export default Home;