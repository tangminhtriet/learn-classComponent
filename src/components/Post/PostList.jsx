import React, { Component } from 'react';

class PostList extends Component {


    render() {
        return (
            <ul>
                {this.props.list.map(post => (
                    <li>
                        {post.title}
                    </li>
                ))}
            </ul>
        );
    }
}

export default PostList;