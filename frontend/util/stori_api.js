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

export const updateStori = stori => (
  $.ajax({
    method: 'PATCH',
    url: `api/storis/${stori.id}`,
    data: { stori },
  })
);
