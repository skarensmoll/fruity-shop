import {useState} from 'react';

const API_URL = 'https://react-my-burger-34f7d.firebaseio.com/fruitOrder.json';

export const HTTP_VERBS = {
  PUT: 'PUT',
  GET: 'GET',
  POST: 'POST',
  DELETE: 'DELETE'
}

const useHttp = ( )=> {
  const [loading, setLoading] = useState(false);

  const sendRequest = async (type, data) => {
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


    const response  = await fetch(API_URL, requestOptions);

    setLoading(false);
    return response.json();
  }


  return [loading, sendRequest];
}

export { useHttp };