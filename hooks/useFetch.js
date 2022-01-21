// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { useEffect, useState } from 'react'
import axios from 'axios'

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);
  return { data, loading, error };
}

export default useFetch;