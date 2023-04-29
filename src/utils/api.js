const getIngredientsDataUrl =
  'https://norma.nomoreparties.space/api/ingredients';

const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
};

const sendRequest = async (url, method, headers, body = null) => {
  return fetch(url, {
    method: method,
    headers: headers,
    body: body,
  }).then(checkResponse);
};

export const getIngredientsData = () => {
  return sendRequest(getIngredientsDataUrl, 'GET', {
    'Content-Type': 'application/json',
  });
};