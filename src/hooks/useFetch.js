import { useState, useEffect } from "react";
import API_BASE_URL from "@/config/config";

export function useFetch(endpoint) {

    const [data, setData] = useState(null);
    const [loading, setLoading ] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=> {
        const abortController = new AbortController();
        setController(abortController);

        fetch(`${API_BASE_URL}${endpoint}`, { signal: abortController.signal })
            .then((res) => res.json())
            .then((json) => setData(json))
            .catch((error) => {
                if(error.name === "AbortError"){
                    console.log("Cancelled request")
                } else {
                    setError(error);
                }
            })
            .finally(() => setLoading(false));

        return () => abortController.abort();
    }, [endpoint]);

    return { data, loading, error };
}