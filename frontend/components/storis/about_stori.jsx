import React from 'react';

class AboutStori extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      about: this.props.about,
      editing: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.openEdit = this.openEdit.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.editing && !prevState.editing) {
      this.aboutText.focus();
    }
  }

  handleChange(e) {
    this.setState({ about: e.currentTarget.value });
  }

  handleSubmit() {
    const stori = new FormData();
    stori.append('stori[metadata][about]', this.state.about);
    this.props.update(stori).then(
      () => this.setState({ editing: false }),
    );
  }

  handleCancel() {
    this.setState({ about: this.props.about, editing: false });
  }

  openEdit() {
    this.setState({ editing: true });
  }

  cancelButton() {
    return (
      <button className="btn btn-square" onClick={this.handleCancel}>Cancel</button>
    );
  }

  buttons() {
    if (this.state.editing) {
      return (
        <div>
          <button className="btn btn-square green" onClick={this.handleSubmit}>
            {this.state.about === '' ? 'Submit' : 'Save'}
          </button>
          {this.cancelButton()}
        </div>
      );
    } else if (this.state.about !== '') {
      return (
        <button className="btn btn-square" onClick={this.openEdit}>
          Edit
        </button>
      );
    }
    return null;
  }

  AboutTextArea() {
    if (this.state.editing || this.state.about !== '') {
      return (
        <textArea
          value={this.state.about}
          onChange={this.handleChange}
          disabled={!this.state.editing}
          ref={(textArea) => { this.aboutText = textArea; }}
        />
      );
    }
    return (
      <input type="text" onClick={this.openEdit} placeholder="Tell us about this Stori" />
    );
  }

  aboutDisplay() {
    return (
      <div className="about-display">
        {this.state.about}
      </div>
    );
  }

  render() {
    return (
      <div className="about-box">
        {this.state.editing ? this.AboutTextArea() : this.aboutDisplay()}
        {this.buttons()}
      </div>
    );
  }
}

AboutStori.propTypes = {
  about: React.PropTypes.string,
  update: React.PropTypes.func.isRequired,
};

AboutStori.defaultProps = {
  about: '',
};

export default AboutStori;
