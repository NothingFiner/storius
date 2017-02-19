import React from 'react';
import StoriBodyContainer from './stori_body_container';

class Stori extends React.Component {

  componentDidMount() {
    this.props.fetchStori();
  }

  componentWillUnmount() {
    this.props.clearStori();
  }

  render() {
    if (!this.props.stori.content) {
      return <div className="loader" />;
    }
    return (
      <div>
        <header className="stori-header">
          <section className="column inner">
            <section className="primary display-flex">
              <div className="art">
              </div>
              <div className="primary-info">
                <h1>{this.props.stori.title}</h1>
                <h2>{this.props.stori.author}</h2>
              </div>
            </section>
          </section>
        </header>
        <StoriBodyContainer />
      </div>
    );
  }
}

Stori.propTypes = {
  fetchStori: React.PropTypes.func.isRequired,
  clearStori: React.PropTypes.func.isRequired,
  stori: React.PropTypes.shape({
    title: React.PropTypes.string,
    author: React.PropTypes.string,
  }).isRequired,
};

export default Stori;
