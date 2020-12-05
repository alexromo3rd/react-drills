import React, { Component } from 'react';

class Image extends Component {
  render(props) {
    console.log(props)
    return(
      <img src={this.props.sampleImage} alt="cat with facemask on" />
    )
  }
}

export default Image;