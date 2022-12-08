import React from 'react';
import styled from "styled-components";

const Search = ({value, setValue}) => {
	return (
		<Input className="input"
			   onChange={(e) => setValue(e.target.value)}
			   placeholder="Search Posts"
			   value={value}>
		</Input>
	);
};

const Input = styled.input`
  width: 100%;
  padding: 5px;
  border-radius: 5px;
`

export default Search;
