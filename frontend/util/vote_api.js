export const downvote = (id, type) => (
  $.ajax({
    method: 'POST',
    url: `api/${type}/${id}/downvote`,
  })
);

export const upvote = (id, type) => (
  $.ajax({
    method: 'POST',
    url: `api/${type}/${id}/upvote`,
  })
);
