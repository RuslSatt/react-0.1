import axios from 'axios';
import React, { useState, useEffect } from 'react';

const useAxiosFetch = dataUrl => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let isMounted = true;
        const source = axios.CancelToken.source();

        const fetchData = async url => {
            setIsLoading(true);
            try {
                const response = await axios.get(url, {
                    cancelToken: source.token,
                });
                if (!isMounted) return;

                setData(response.data);
                setIsLoading(false);
                setError(null);
            } catch (err) {
                if (!isMounted) return;
                setError(err.message);
                setData([]);
            } finally {
                if (!isMounted) return;
                setTimeout(() => {
                    setIsLoading(false);
                }, 200);
            }
        };

        fetchData(dataUrl);

        const cleanUp = () => {
            isMounted = false;
            source.cancel();
        };

        return cleanUp;
    }, [dataUrl]);

    return { data, error, isLoading };
};

export default useAxiosFetch;
