const getIngredientsDataUrl =
  'https://norma.nomoreparties.space/api/ingredients';

const createOrderUrl = 'https://norma.nomoreparties.space/api/orders';

const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(res);
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

export const createOrder = (ids) => {
  const body = JSON.stringify({
    ingredients: ids,
  });
  return sendRequest(
    createOrderUrl,
    'POST',
    {
      'Content-Type': 'application/json',
    },
    body
  );
};
