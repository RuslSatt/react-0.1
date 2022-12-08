import React from 'react';
import Search from "./Search";
import styled from "styled-components";

const Form = ({value, setValue}) => {
	return (
		<Wrapper onSubmit={(e) => e.preventDefault()}>
			<Search value={value} setValue={setValue}></Search>
		</Wrapper>
	);
};

const Wrapper = styled.form`
  width: 100%;
  max-width: 300px;
`

export default Form;
