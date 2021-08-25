import {useState, useCallback} from 'react';

export const HTTP_VERBS = {
  PUT: 'PUT',
  GET: 'GET',
  POST: 'POST',
  DELETE: 'DELETE'
}

export const API = {
  FRUITS: 'https://react-my-burger-34f7d.firebaseio.com/fruits.json',
  ORDERS: 'https://react-my-burger-34f7d.firebaseio.com/fruitOrder.json'
}

const useHttp = ( )=> {
  const [loading, setLoading] = useState(false);

  const sendRequest = useCallback(async (type, api, data) => {
    setLoading(true);
    let requestOptions = { };

    switch (type) {
      case HTTP_VERBS.POST:
        requestOptions = {
          method: HTTP_VERBS.POST,
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }
        break;
        default:
          break;
    }


    const response  = await fetch(api, requestOptions);

    setLoading(false);
    return response.json();
  }, []);


  return [loading, sendRequest];
}

export { useHttp };