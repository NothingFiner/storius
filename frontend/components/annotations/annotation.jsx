import React from 'react';
import Quill from 'quill';

class Annotation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  componentDidMount() {
    this.quill = new Quill('#annotationText');
    if (this.props.selectedId !== null) {
      this.quill.setContents(JSON.parse(this.props.fetchAnnotation()));
      this.quill.disable();
    }
  }

  render() {
    return (
      <section className="annotation-bar">
        <div style={{ top: this.props.top }} className="arrow">
          <svg viewBox="0 0 128 128">
            <path d="M95 128L39 63.8 95 0" />
          </svg>
        </div>
        <aside style={{ top: this.props.top - 121 }} className="annotation-container">
          <div id="annotationText" />
          <button onClick={this.props.toggleAnnotation} className="btn btn-square">Cancel</button>
        </aside>
      </section>
    );
  }
}

Annotation.propTypes = {
  fetchAnnotation: React.PropTypes.func.isRequired,
  selectedId: React.PropTypes.number,
  toggleAnnotation: React.PropTypes.func.isRequired,
  top: React.PropTypes.number.isRequired,
};

Annotation.defaultProps = {
  selectedId: null,
};

export default Annotation;
