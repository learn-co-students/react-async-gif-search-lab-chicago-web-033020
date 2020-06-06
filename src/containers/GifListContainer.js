import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export class GifListContainer extends Component {

  constructor() {
    super()

    this.state = {
      searchQuery: 'dolphin',
      gifs: []
    }
  }

  componentDidMount() {
    let searchQuery = this.state.searchQuery
    let gifURL = `https://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=gXhWapWKL8GkwkQNvpEmkxgw5HkLai9x&rating=g`
    fetch(gifURL)
      .then(resp => resp.json())
      .then(gifs => {
        this.setState({
          gifs: gifs.data.slice(0, 3)
        })
      })
  }

  handleSearchInputChange = (event) => {
    this.setState({
        searchQuery: event.target.value
    })
  }

  onSearchQuerySubmit = (event) => {
    event.preventDefault()
    let searchQuery = this.state.searchQuery
    let gifURL = `https://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=gXhWapWKL8GkwkQNvpEmkxgw5HkLai9x&rating=g`

    fetch(gifURL)
      .then(resp => resp.json())
      .then(gifs => {
        this.setState({
          gifs: gifs.data
        })
      })
  }

  render() {
    return (
      <div>
        <GifSearch
          onSubmit={this.onSearchQuerySubmit}
          onChange={this.handleSearchInputChange}
          value={this.state.searchQuery}
        />
        <GifList
          gifs={this.state.gifs}
        />
      </div>
    )
  }
}

export default GifListContainer