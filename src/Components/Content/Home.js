import React from 'react';
import styled from "styled-components";
import Posts from "./Posts";

const Home = ({posts}) => {
	return (
		<Main>
			{posts.length ? (
				<Posts posts={posts}></Posts>
			) : <p>No content</p>}
		</Main>
	);
};

export const Main = styled.main`
  flex-grow: 1;
  padding: 10px;
`

export default Home;
