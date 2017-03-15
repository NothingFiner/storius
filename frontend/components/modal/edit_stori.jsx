import React from 'react';

class EditStoriForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: null,
      youtube: this.props.audioVideo.youtube,
      production: this.props.metadata.production,
      writer: (this.props.metadata.writer || ''),
      editor: (this.props.metadata.editor || ''),
    };

    this.updatePhoto = this.updatePhoto.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  updatePhoto(e) {
    const photo = e.currentTarget.files[0];
    this.setState({ photo });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const metadata = {
      production: this.state.production,
      writer: this.state.writer,
      editor: this.state.editor,
    };
    const stori = new FormData();
    if (this.state.photo) {
      stori.append('stori[photo]', this.state.photo);
    }
    stori.append('stori[audio_video][youtube]', this.state.youtube);
    stori.append('stori[metadata][production]', metadata.production);
    stori.append('stori[metadata][writer]', metadata.writer);
    stori.append('stori[metadata][editor]', metadata.editor);
    this.props.updateStori(stori).then(
      () => this.props.toggleModal(),
    );
  }

  render() {
    return (
      <div>
        <h3>Edit Stori Details</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="file" onChange={this.updatePhoto} />
          <label htmlFor="writer">Writing Credits</label>
          <input id="writer" onChange={this.update('writer')} placeholder="Writers" type="text" value={this.state.writer}/>
          <label htmlFor="production">Production Credits</label>
          <input id="production" onChange={this.update('production')} placeholder="Producers" type="text" value={this.state.production} />
          <label htmlFor="editor">Editing Credits</label>
          <input id="editor" onChange={this.update('editor')} placeholder="Editors" type="text" value={this.state.editor}/>
          <label htmlFor="youtube">Youtube URL</label>
          <input id="youtube" onChange={this.update('youtube')} placeholder="youtube.com/watch?v=2HQaBWziYvY" type="text" value={this.state.youtube} />
          <button className="btn btn-square">Save</button>
        </form>
      </div>
    );
  }
}

EditStoriForm.propTypes = {
  updateStori: React.PropTypes.func.isRequired,
  audioVideo: React.PropTypes.shape({
    youtube: React.PropTypes.string,
  }).isRequired,
  toggleModal: React.PropTypes.func.isRequired,
};

export default EditStoriForm;
