import React, { Component } from "react";

class GifList extends Component {

  getGifs = () => {
    return this.props.gifs.map(gif => { 
      return <li key={gif.id}>
        <img src={gif.images.original.url} alt={gif.title} ></img>
      </li>;
    })
  }

  render() {
    // console.log(this.props);
    // images.original.url

    return (
      <div>
        {this.getGifs()}
      </div>
    )
  }
}

export default GifList;
