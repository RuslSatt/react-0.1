import React from 'react';
import styled from "styled-components";

const Header = () => {
	return (
		<Wrapper>
			<Text>React Js Blog</Text>
		</Wrapper>
	);
};

const Wrapper = styled.header`
  min-height: 50px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  background: lightslategray;
`

const Text = styled.p`
  font-family: Ubuntu, sans-serif;
  font-size: 20px;
  font-weight: 400;
`

export default Header;
