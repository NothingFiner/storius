import React from 'react';
import { withRouter } from 'react-router';
import StoriBodyContainer from './stori_body_container';

class Stori extends React.Component {
  constructor() {
    super();

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchStori();
  }

  componentWillUnmount() {
    this.props.clearStori();
  }

  handleDelete() {
    this.props.deleteStori().then(() => this.props.router.push('/'));
  }

  deleteButton() {
    if (this.props.currentUser !== null && this.props.currentUser.id === this.props.stori.user_id) {
      return (
        <button onClick={this.handleDelete} className="btn btn-square">Delete</button>
      );
    }
    return null;
  }

  render() {
    if (!this.props.stori.title) {
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
        <section className="stori-footer bg-white column">
          { this.deleteButton() }
        </section>
      </div>
    );
  }
}

Stori.propTypes = {
  fetchStori: React.PropTypes.func.isRequired,
  clearStori: React.PropTypes.func.isRequired,
  deleteStori: React.PropTypes.func.isRequired,
  stori: React.PropTypes.shape({
    title: React.PropTypes.string,
    author: React.PropTypes.string,
  }).isRequired,
};

export default Stori;
