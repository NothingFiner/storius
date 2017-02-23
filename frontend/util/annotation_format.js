import Quill from 'quill';

const Inline = Quill.import('blots/inline');

class AnnotationBlot extends Inline {
  static create(id) {
    const node = super.create();
    node.setAttribute('data-annotation-id', id);
    return node;
  }

  static formats(node) {
    return node.getAttribute('data-annotation-id');
  }
}
AnnotationBlot.blotName = 'annotation';
AnnotationBlot.className = 'annotationLink';

export default AnnotationBlot;
