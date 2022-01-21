import { useState, useEffect } from 'react';

export const useQuote = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState("");


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/getQuote');
                const data = await response.json()
                setData(data);
                setLoading(false);
            }
            catch (err) {
                setError(err);
            }
        }
        fetchData()
    }, []
    )
    return { data, loading, error }
}