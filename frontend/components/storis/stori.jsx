import React from 'react';
import { withRouter } from 'react-router';
import StoriBodyContainer from './stori_body_container';
import Comments from '../comments/comments';
import CommentFormContainer from '../comments/comments_form_container';

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

  audio() {
    if (this.props.stori.audio_video.bandcamp) {
      return (
        <h3>bandcamp</h3>
      );
    } else if (this.props.stori.audio_video.soundcloud) {
      return (
        <h3>soundcloud</h3>
      );
    }
    return null;
  }

  render() {
    if (!this.props.stori.title) {
      return <div className="loader" />;
    }
    const headerStyle = {
      backgroundImage: `url(${this.props.stori.image_url || window.images.storiusYellow})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    };
    return (
      <div>
        <header
          style={headerStyle}
          className="stori-header"
        >
          <section className="column inner">
            <section className="primary">
              <div className="art">
                <img alt="stori" src={this.props.stori.image_url || window.images.storiusMono} />
              </div>
              <div className="primary-info">
                <h1>{this.props.stori.title}</h1>
                <h2>{this.props.stori.author}</h2>
              </div>
            </section>
            <section className="secondary">
              { this.audio() }
            </section>
          </section>
        </header>
        <StoriBodyContainer />
        <section className="stori-footer bg-white column">
          { this.deleteButton() }
        </section>
        <section className="column bg-white">
          <div className="primary margin-bottom-1rem">
            <CommentFormContainer />
            { this.props.stori
              ? <Comments comments={this.props.stori.comments} />
              : null
            }
          </div>
        </section>
      </div>
    );
  }
}

Stori.propTypes = {
  router: React.PropTypes.shape({
    push: React.PropTypes.func,
  }).isRequired,
  currentUser: React.PropTypes.shape({
    id: React.PropTypes.number,
  }),
  fetchStori: React.PropTypes.func.isRequired,
  clearStori: React.PropTypes.func.isRequired,
  deleteStori: React.PropTypes.func.isRequired,
  stori: React.PropTypes.shape({
    title: React.PropTypes.string,
    author: React.PropTypes.string,
    user_id: React.PropTypes.number,
    comments: React.PropTypes.object,
  }).isRequired,
  deleteComment: React.PropTypes.func.isRequired,
};

Stori.defaultProps = {
  currentUser: null,
};

export default Stori;
