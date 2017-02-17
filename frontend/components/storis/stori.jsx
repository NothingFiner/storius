import React from 'react';

class Stori extends React.Component {
  componentDidMount() {
    this.props.fetchStori();
  }

  render() {
    return (
      <h1>{this.props.stori.title}</h1>
    );
  }
}

export default Stori;
