import React from 'react';


class Singer extends React.Component {
  render() {

  const SingStyle = {
    margin: "5px",
    backgroundColor: this.props.color
  }

    return(
      <p style={SingStyle}>Welcome, {this.props.name}</p>
    )
  }
}

export default Singer;
