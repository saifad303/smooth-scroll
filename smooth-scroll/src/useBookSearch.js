import {useEffect, useState} from 'react';
import axios from 'axios';

function useBookSearch(query, pageNumber) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [books, steBooks] = useState([]);
    const [hasMore, setHasMore] = useState(false);

    useEffect(() =>{
        setLoading(true);
        setError(false);
        let cancel;
        axios({
            method: 'GET',
            url: 'http://openlibrary.org/search.json',
            params: { q: query, page: pageNumber },
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then((res) =>{
            console.log('[searchBooks.js]',res.data);
        }).catch((e) =>{
            if(axios.isCancel(e))
            return;
        });

        return () => cancel();
    },[query, pageNumber]);
}

export default useBookSearch;