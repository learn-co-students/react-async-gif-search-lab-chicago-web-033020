import React, { Component } from 'react'

class GifSearch extends Component {
  state = {
    search: ""
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.fetchGifs(this.state.search)
  }

  render() {
    return (
      <div>
        <form onSubmit = {this.handleSubmit}>
          <strong>What Gifs Do You Want to Search For?</strong>
          <input type="text" name="search" id="search" value={this.state.search} onChange={this.handleChange}/>
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}

export default GifSearch