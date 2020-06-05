import React from 'react'

class GifList extends React.Component {

  renderGifs = () => {
    return this.props.gifs.map(gif => 
      <li style={{display: "inline", padding: "10px", alignContent: "center"}}>
        <img 
          src={gif.images.original.url} 
          alt={gif.images.original.url}
          className="img-thumbnail"
        >
        </img>
      </li>)
  }

  render(){
    return(
      <div>
        <ul style={{display: "flex", justifyContent: "center"}}>
          {this.renderGifs()}
        </ul>
      </div>
    )
  }
}

export default GifList