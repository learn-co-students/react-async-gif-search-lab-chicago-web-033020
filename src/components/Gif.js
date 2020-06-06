import React, { Component } from 'react'

export class Gif extends Component {
    render() {
        return (
            <li>
                <img src={this.props.gif.images.original.url} />
            </li>
        )
    }
}

export default Gif
