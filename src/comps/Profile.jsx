import React from 'react';

class Singer extends React.Component {
  render() {
    const conSty = { border: "2px solid black", padding: "3px", width: "180px", background: "gray", margin: "4px" }
    const imgSty ={ border: "2px solid black", width: "170", height: "210px", margin: "4px auto", display: "block"}
    return(
      <div style={conSty}>
        <img style={imgSty} src={this.props.pic} alt="Missing Pic"/>
        <div><strong> Name: </strong>{this.props.name}</div>
        <div><strong> Group: </strong>{this.props.group}</div>
        <div><strong> Country: </strong>{this.props.country}</div>
      </div>
    )
  }
}

export default Singer;
