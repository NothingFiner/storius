export const fetchStoris = () => (
  $.ajax({
    method: 'GET',
    url: 'api/storis',
  })
);

export const fetchStori = storiId => (
  $.ajax({
    method: 'GET',
    url: `api/storis/${storiId}`,
  })
);

export const createStori = stori => (
  $.ajax({
    method: 'POST',
    url: 'api/storis',
    data: { stori },
  })
);

export const updateStori = (stori, id) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/storis/${id}`,
    contentType: false,
    processData: false,
    data: stori,
  });
};

export const deleteStori = storiId => (
  $.ajax({
    method: 'DELETE',
    url: `api/storis/${storiId}`,
  })
);
