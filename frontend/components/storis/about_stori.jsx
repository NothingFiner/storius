import React from 'react';

class AboutStori extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      about: this.props.about,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ about: e.currentTarget.value });
  }

  handleSubmit() {
    const stori = new FormData();
    stori.append('stori[metadata][about]', this.state.about);
    this.props.update(stori);
  }

  render() {
    return (
      <div>
        <textArea
          value={this.state.about}
          placeholder="tell us about this song"
          onChange={this.handleChange}
        />
      <button className="btn btn-square" onClick={this.handleSubmit}>Update</button>
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
