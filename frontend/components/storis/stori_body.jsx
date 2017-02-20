import React from 'react';
import Quill from 'quill';
import AnnotationContainer from '../annotations/annotation_container';

class StoriBody extends React.Component {
  constructor() {
    super();

    this.handleSelection = this.handleSelection.bind(this);
  }

  componentDidMount() {
    this.quill = new Quill('#storiText');
    this.quill.setContents(this.parseContent());
    this.quill.disable();
    this.quill.on('selection-change', this.handleSelection);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.stori.content !== newProps.stori.content) {
      this.quill.setContents(JSON.parse(newProps.stori.content));
    }
  }

  getBtnTop() {
    const selectionBounds = this.quill.getBounds(this.props.start_idx, this.props.length);
    return selectionBounds.top + (selectionBounds.height - 17);
  }

  parseContent() {
    return JSON.parse(this.props.stori.content);
  }

  handleSelection(range, oldRange) {
    if (!range) return;
    this.props.updateSelection(range);
  }


  rightColumn() {
    if (this.props.start_idx !== null && this.props.length > 0) {
      const top = this.getBtnTop();
      return (
        <aside className="pos-rel" style={{ top }}>
          <button
            onClick={() => this.props.toggleAnnotation(null)}
            className="btn btn-square"
          >
            Add Annotation
          </button>
        </aside>
      );
    }
    return (<p>stuff</p>);
  }

  render() {
    return (
      <div>
        <section className="stori-content column bg-white">
          <div className="primary">
            <h3>Text for {this.props.stori.title}</h3>
            <div id="storiText" className="text" />
          </div>
          <div className="secondary margin-top-1rem">
            <p className="annotation-label">
              About {`"${this.props.stori.title}"`}
            </p>
            { this.props.showAnnotation ? <AnnotationContainer top={this.getBtnTop()} /> : this.rightColumn() }
          </div>
        </section>
      </div>
    );
  }
}

StoriBody.propTypes = {
  stori: React.PropTypes.shape({
    author: React.PropTypes.string,
    title: React.PropTypes.string,
    content: React.PropTypes.string,
  }).isRequired,
  updateSelection: React.PropTypes.func.isRequired,
  start_idx: React.PropTypes.number.isRequired,
  length: React.PropTypes.number.isRequired,
  showAnnotation: React.PropTypes.bool.isRequired,
  toggleAnnotation: React.PropTypes.func.isRequired,
};

export default StoriBody;
