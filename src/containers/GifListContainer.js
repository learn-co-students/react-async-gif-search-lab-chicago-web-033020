import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
  constructor() {
    super()
    this.state = {
      gifList: []
    }
  }
  render() {
    return (
      <div>
        <GifSearch fetchGifs={this.fetchGifs} />
        <GifList gifs={this.state.gifList} />
      </div>
    )
  }

  fetchGifs = (query) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
    .then(resp => resp.json())
    .then(({data}) => {
      this.setState({
        gifList: data.map(aGif => ({url: aGif.images.original.url}))
      })
    })
  }

  componentDidMount() {
    this.fetchGifs()
  }
}

export default GifListContainer
