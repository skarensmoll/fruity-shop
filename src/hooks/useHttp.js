import {useState} from 'react';

const API_URL = 'https://react-my-burger-34f7d.firebaseio.com/fruitOrder.json';

const useHttp = ( )=> {
  const [loading, setLoading] = useState(false);

  const sendRequest = async (type, data) => {
    setLoading(true);
    let requestOptions = { };

    if(type === 'POST') {
      requestOptions = {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
    }

    const response  = await fetch(API_URL, requestOptions);

    setLoading(false);
    return response.json();
  }


  return [loading, sendRequest];
}

export default useHttp;