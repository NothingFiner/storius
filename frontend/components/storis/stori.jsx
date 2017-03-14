import React from 'react';
import StoriBodyContainer from './stori_body_container';
import Comments from '../comments/comments';
import CommentFormContainer from '../comments/comments_form_container';

class Stori extends React.Component {
  constructor() {
    super();

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchStori(this.props.storiId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.storiId !== nextProps.storiId) {
      this.props.clearStori();
      this.props.fetchStori(nextProps.storiId);
    }
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
    const headerStyle = {
      backgroundImage: `url(${this.props.stori.photo_url})`,
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
                <img alt="stori" src={this.props.stori.photo_url} />
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
        <section className="column bg-white">
          <div className="primary margin-bottom-1rem">
            {
              this.props.currentUser !== null ? <CommentFormContainer /> : null
            }
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
    audio_video: React.PropTypes.object,
    photo_url: React.PropTypes.string,
    id: React.PropTypes.number,
  }).isRequired,
  storiId: React.PropTypes.number.isRequired,
};

Stori.defaultProps = {
  currentUser: null,
};

export default Stori;
