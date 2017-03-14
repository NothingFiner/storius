import React from 'react';

class EditStoriForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: this.props.photo,
    };

    this.updatePhoto = this.updatePhoto.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updatePhoto(e) {
    const photo = e.currentTarget.files[0];
    this.setState({ photo });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('stori[photo]', this.state.photo);
    this.props.updateStori(formData);
  }

  render() {
    return (
      <div>
        <h3>Edit Stori</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="file" onChange={this.updatePhoto} />
          <button className="btn btn-square">Save</button>
        </form>
      </div>
    );
  }
}

EditStoriForm.propTypes = {
  updateStori: React.PropTypes.func.isRequired,
};

export default EditStoriForm;
