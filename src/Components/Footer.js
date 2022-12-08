import React from 'react';
import styled from "styled-components";

const Footer = () => {
	return (
		<Wrapper>
			<Text>Copyrigth 2022</Text>
		</Wrapper>
	);
};

const Wrapper = styled.footer`
  width: 100%;
  min-height: 35px;
  background: lightslategray;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`

const Text = styled.p`
  font-size: 20px;
`

export default Footer;
