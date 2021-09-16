import { useState, useEffect } from 'react';

export default function useFetch(username, setLoading) {
    const [data, setData] = useState(null);

    useEffect(() => {
        if(username) {
            fetch(`https://api.github.com/users/${username}`)
            .then(r => {
                if(r.status === 200) {
                    return r.json();
                } else {
                    return { status: 404 }
                }
            })
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(err => {
                console.log(`Error - ${err}`);
                setLoading(false);
            });
        }

    }, [username, setLoading]);

    return data;
}