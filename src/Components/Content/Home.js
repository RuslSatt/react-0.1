import React from 'react';
import styled from "styled-components";
import Posts from "./Posts";

const Home = ({items}) => {
	return (
		<Container>
			{items.length ? (
				<Posts items={items}></Posts>
			) : <p>No content</p>}
		</Container>
	);
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`

export default Home;
