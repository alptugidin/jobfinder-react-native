import {useEffect, useState} from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {updateJobsCount} from '../stores/favList';

const useFetch = url => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({state: false, message: ''});
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        setData(response.data);
        dispatch(updateJobsCount(response.data.results.length));
      })
      .catch(err => setError({state: true, message: err}))
      .finally(() => setLoading(false));
  }, [url]);

  return {data, error, loading};
};

export default useFetch;
