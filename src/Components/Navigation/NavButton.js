import React from 'react';
import styled from "styled-components";

const NavButton = ({text}) => {

	return (
		<Button onClick={() => {}}>
			{text}
		</Button>
	);
};

const Button = styled.button`
  background: transparent;
  font-size: 16px;
  transition: 0.15s;

  &:hover {
    color: #fff;
  }
`

export default NavButton;
