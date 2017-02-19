export const fetchAnnotation = annotationId => (
  $.ajax({
    method: 'GET',
    url: `api/annotations/${annotationId}`,
  })
);

export const createAnnotation = (annotation, storiId) => (
  $.ajax({
    method: 'POST',
    url: `api/storis/${storiId}/annotations`,
    data: { annotation },
  })
);

export const updateAnnotation = annotation => (
  $.ajax({
    method: 'PATCH',
    url: `api/annotations/${annotation.id}`,
    data: { annotation },
  })
);
