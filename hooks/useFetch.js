import {useEffect, useState} from 'react';
import axios from 'axios';

const useFetch = url => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({state: false, message: ''});

  useEffect(() => {
    axios
      .get(url)
      .then(response => setData(response.data))
      .catch(err => setError({state: true, message: err}))
      .finally(() => setLoading(false));
  }, [url]);

  return {data, error, loading};
};

export default useFetch;
