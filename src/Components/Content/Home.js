import React from 'react';
import styled from 'styled-components';
import Posts from './Posts';

const Home = ({ posts, isLoading, error }) => {
    return (
        <Main>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error...</p>}
            {!isLoading &&
                !error &&
                (posts.length ? <Posts posts={posts}></Posts> : <p>No content</p>)}
        </Main>
    );
};

export const Main = styled.main`
    flex-grow: 1;
    padding: 10px;
`;

export default Home;
