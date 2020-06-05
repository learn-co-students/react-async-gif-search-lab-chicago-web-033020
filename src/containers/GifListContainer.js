import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {

  constructor(){
    super()
    this.state = {
      gifs: []
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let search = event.target.search.value
    fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=ZnyMwXrNuHSmSQcmbcDFmhiSfFbASYSz&rating=g`)
    .then(resp => resp.json())
    .then(json => this.setState({
      gifs: json.data.slice(0, 3)
      })
    )
  }

  render(){
    return (
      <div>
        < GifSearch handleSubmit={this.handleSubmit}/>
        < GifList gifs={this.state.gifs} />
        </div>
    )
  }
}

export default GifListContainer