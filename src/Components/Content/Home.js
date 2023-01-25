import React from 'react';
import { useContext } from 'react';
import DataContext from '../../context/DataContext';
import styled from 'styled-components';
import Posts from './Posts';

const Home = () => {
    const { searchResult, isLoading, error } = useContext(DataContext);
    return (
        <Main>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error...</p>}
            {!isLoading &&
                !error &&
                (searchResult.length ? <Posts posts={searchResult}></Posts> : <p>No content</p>)}
        </Main>
    );
};

export const Main = styled.main`
    flex-grow: 1;
    padding: 10px;
`;

export default Home;
