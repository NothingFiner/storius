import React from 'react';
import Quill from 'quill';
import { values, isEqual } from 'lodash';
import AnnotationBlot from '../../util/annotation_format';
import AnnotationContainer from '../annotations/annotation_container';

Quill.register(AnnotationBlot);

class StoriBody extends React.Component {
  constructor(props) {
    super(props);

    this.handleSelection = this.handleSelection.bind(this);
    this.handleNewAnnotation = this.handleNewAnnotation.bind(this);
    this.parseAnnotations = this.parseAnnotations.bind(this);
    this.closeAnnotation = this.closeAnnotation.bind(this);

    if (this.props.showAnnotation === true) {
      this.props.toggleAnnotation();
    }
  }

  componentDidMount() {
    this.quill = new Quill('#storiText');
    this.quill.setContents(JSON.parse(this.props.stori.content));
    this.parseAnnotations();
    this.quill.disable();
    this.quill.on('selection-change', this.handleSelection);
  }

  componentWillReceiveProps(newProps) {
    if (!isEqual(this.props.stori.annotations, newProps.stori.annotations)) {
      this.quill.setContents(JSON.parse(this.props.stori.content));
      this.parseAnnotations(newProps.stori.annotations);
    }
    if (!newProps.showAnnotation && !newProps.editing && this.props.selectedId === null) {
      this.quill.removeFormat(this.props.start_idx, this.props.length, 'annotation', false);
    }
    if (this.props.length !== newProps.length && newProps.length === 0) {
      this.quill.setSelection(null);
    }
  }

  componentWillUnmount() {
    this.props.clearSelection();
    if (this.props.showAnnotation === true) {
      this.props.toggleAnnotation();
    }
  }

  getBtnTop() {
    if (this.quill === undefined) return;
    const selectionBounds = this.quill.getBounds(this.props.start_idx, this.props.length);
    const top = selectionBounds.bottom - (selectionBounds.height / 2);
    return top > 0 ? top : 0;
  }

  parseAnnotations(annotations = this.props.stori.annotations) {
    values(annotations).forEach((annotation) => {
      this.quill.formatText(annotation.start_idx, annotation.length, 'annotation', annotation.id);
      const lines = document.querySelectorAll(`span[data-annotation-id="${annotation.id}"]`);
      Array.from(lines).forEach((line) => {
        line.addEventListener('mouseenter', () => {
          lines.forEach(l => l.classList.add('active'));
        });
        line.addEventListener('mouseleave', () => {
          lines.forEach(l => l.classList.remove('active'));
        });
        line.addEventListener('click', () => {
          lines.forEach(l => l.classList.add('open'));
          this.props.selectAnnotation(annotation.id);
          if (!this.props.showAnnotation) {
            this.openAnnotation();
          }
        });
      });
    });
  }

  openAnnotation() {
    this.props.toggleAnnotation();
    document.getElementById('annotationCloser')
      .addEventListener('mousedown', this.closeAnnotation, false);
    document.getElementById('annotationCloser')
      .classList.toggle('active');
  }

  closeAnnotation() {
    document.getElementById('annotationCloser')
      .removeEventListener('mousedown', this.closeAnnotation, false);
    document.getElementById('annotationCloser')
      .classList.toggle('active');
    if (this.props.showAnnotation) {
      this.props.toggleAnnotation();
    }
    this.props.clearSelection();
    this.parseAnnotations();
  }

  handleSelection(range, oldRange) {
    if (this.props.showAnnotation) return;
    if (!range || range === oldRange ||
      this.containsAnnotation(this.quill.getContents(range.index, range.length))) {
      this.props.updateSelection({ index: 0, length: 0 });
      return;
    }
    this.props.updateSelection(range);
  }

  containsAnnotation(selection) {
    let includesAnnotation = false;
    selection.forEach((el) => {
      if (el.attributes && el.attributes.annotation) {
        includesAnnotation = true;
      }
    });
    return includesAnnotation;
  }

  handleNewAnnotation() {
    this.quill.formatText(this.props.start_idx, this.props.length, 'annotation', 'new');
    this.props.selectAnnotation(null);
    this.openAnnotation();
  }

  annotationButton() {
    if (this.props.loggedIn) {
      return (
        <button
          onClick={this.handleNewAnnotation}
          className="btn btn-square"
        >
          Add Annotation
        </button>
      );
    }
    return (
      <button
        onClick={this.props.toggleModal}
        className="btn btn-square"
      >
        Sign In to Annotate
      </button>
    );
  }


  rightColumn() {
    if (this.props.length > 0 && !this.props.showAnnotation) {
      const top = this.getBtnTop() + 14;
      return (
        <aside className="annotation-btn-container" style={{ top }}>
          {this.annotationButton()}
        </aside>
      );
    }
    return (
      <p className="annotation-label">
        About {`"${this.props.stori.title}"`}
      </p>
    );
  }

  render() {
    return (
      <div>
        <section className="stori-content column bg-white">
          <div className="primary">
            <h3>Text for {this.props.stori.title}</h3>
            <div style={{ userSelect: this.props.showAnnotation ? 'none' : 'inherit' }} id="storiText" className="text" />
          </div>
          <div className="secondary margin-top-1rem">
            {
              this.props.showAnnotation
                ? <AnnotationContainer storiQuill={this.quill} top={this.getBtnTop()} />
                : this.rightColumn()
            }
          </div>
        </section>
        <div id="annotationCloser" />
      </div>
    );
  }
}

StoriBody.propTypes = {
  stori: React.PropTypes.shape({
    author: React.PropTypes.string,
    title: React.PropTypes.string,
    content: React.PropTypes.string,
    annotations: React.PropTypes.object,
  }).isRequired,
  updateSelection: React.PropTypes.func.isRequired,
  start_idx: React.PropTypes.number.isRequired,
  length: React.PropTypes.number.isRequired,
  showAnnotation: React.PropTypes.bool.isRequired,
  toggleAnnotation: React.PropTypes.func.isRequired,
  selectAnnotation: React.PropTypes.func.isRequired,
  loggedIn: React.PropTypes.bool.isRequired,
  toggleModal: React.PropTypes.func.isRequired,
  selectedId: React.PropTypes.number,
  clearSelection: React.PropTypes.func.isRequired,
};

StoriBody.defaultProps = {
  selectedId: null,
};
export default StoriBody;
