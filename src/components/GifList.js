import React, { Component } from 'react'
import Gif from './Gif'

export class GifList extends Component {

    renderGifs = () => {
        return this.props.gifs.map(gif => {
            return <Gif gif={gif} key={gif.id} />
        })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.renderGifs()}
                </ul>
            </div>
        )
    }
}

export default GifList
