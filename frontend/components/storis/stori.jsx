import React from 'react';

class Stori extends React.Component {
  componentDidMount() {
    this.props.fetchStori();
  }

  render() {
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
        <section className="stori-content column bg-white">
          <div className="primary">
            <h3>Text for {this.props.stori.title}</h3>
            <div className="text">
              { this.props.stori.content }
            </div>
          </div>
          <div className="secondary margin-top-1rem">
            <p className="annotation-label">
              About {`"${this.props.stori.title}"`}
            </p>
          </div>
        </section>
      </div>
    );
  }
}

Stori.propTypes = {
  fetchStori: React.PropTypes.func.isRequired,
};

export default Stori;
