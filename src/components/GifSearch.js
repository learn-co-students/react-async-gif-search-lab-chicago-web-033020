import React from 'react'

class GifSearch extends React.Component {

  constructor(){
    super()
    this.state = {
      search: ""
    }
  }

  handleInputChange = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  render(){
    return(
      <form onSubmit={event => this.props.handleSubmit(event)}>
        <input 
          id="search" 
          className="form-control"
          name="search" 
          type="text" 
          value={this.state.search}
          onChange={event => this.handleInputChange(event)}
        >
        </input>
        <button 
          class="btn btn-primary"
          type="submit"
        >
          Search
        </button>
      </form>
    )
  }
}

export default GifSearch