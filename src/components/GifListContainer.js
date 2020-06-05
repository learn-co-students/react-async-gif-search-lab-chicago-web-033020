import React, { Component } from "react";
import GifList from "./GifList.js";
import GifSearch from "./GifSearch.js";

const urlFront = "https://api.giphy.com/v1/gifs/search?q="
const apiKey = "&api_key=dc6zaTOxFJmzC&rating=g"

class GifListContainer extends Component {
  state = {
    gifs: [],
  };

  componentDidMount() {
    fetch(`${urlFront}YOUR%20QUERY%20HERE${apiKey}`)
      .then((resp) => resp.json())
      .then((gifs) => this.setState({ gifs: gifs.data.slice(0, 3) }));
  }

  fetchGifs = (query = "dolphins") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(res => res.json())
      .then((gifs) => {
        // console.log(gifs)
        this.setState({ gifs: gifs.data.slice(0,3)})
      })
  }

  render() {
    return (
      <div>
        <GifSearch fetchGifs={this.fetchGifs} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;
