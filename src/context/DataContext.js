import { createContext, useState, useEffect } from 'react';
import useAxiosFetch from '../hooks/useAxiosFetch';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const { data, error, isLoading } = useAxiosFetch('http://localhost:3100/posts');

    useEffect(() => {
        setPosts(data);
    }, [data]);

    useEffect(() => {
        const filteredResults = posts.filter(model => {
            return includesSearch(model.body) || includesSearch(model.title);
        });
        setSearchResult(filteredResults);
    }, [posts, search]);

    const includesSearch = value => {
        if (value?.toLowerCase().includes(search)) return true;
    };

    return (
        <DataContext.Provider
            value={{
                search,
                setSearch,
                searchResult,
                error,
                isLoading,
                posts,
                setPosts,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;
