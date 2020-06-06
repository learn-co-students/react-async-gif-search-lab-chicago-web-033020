import React, { Component } from 'react'

export class GifSearch extends Component {

    render() {
        return (
            <div>
                <form onSubmit={this.props.onSubmit}>
                    <input
                        onChange={this.props.onChange}
                        value={this.props.value}
                        type='text'
                        placeholder='GIF...'
                    />
                    <input
                        type='submit'
                        value='Search for GIF'
                    />
                </form>
            </div>
        )
    }
}

export default GifSearch
