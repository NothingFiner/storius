import React from 'react';

class AboutStori extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      about: this.props.about,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ about: e.currentTarget.value });
  }

  render() {
    return (
      <textArea
        value={this.state.about}
        placeholder="tell us about this song"
        onChange={this.handleChange}
      />
    );
  }
}

AboutStori.propTypes = {
  about: React.PropTypes.string,
};

AboutStori.defaultProps = {
  about: '',
};

export default AboutStori;
