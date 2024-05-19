import React, { Component } from 'react';

class SearchFilter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: ''
        }
        this.typingTimeOut = React.createRef(null)
    }
    handleSearchChange = (e) => {
        const formValue = {
            value: e.target.value
        }
        this.setState({
            search: e.target.value
        })
        if (this.typingTimeOut) {
            clearTimeout(this.typingTimeOut.current)
        }
        this.typingTimeOut.current = setTimeout(() => {
            this.props.onSubMit(formValue)
        }, 300);
    }
    render() {
        return (
            <div>
                <form>
                    <input type='text' value={this.state.search} onChange={this.handleSearchChange} />
                </form>
            </div>
        );
    }
}

export default SearchFilter;