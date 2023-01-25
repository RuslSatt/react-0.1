import React from 'react';
import { useContext } from 'react';
import DataContext from '../context/DataContext';
import styled from 'styled-components';

const Form = () => {
    const { search, setSearch } = useContext(DataContext);
    return (
        <StyledForm onSubmit={e => e.preventDefault()}>
            <Label htmlFor="search">Search Posts</Label>
            <Input
                id="search"
                type="text"
                className="input"
                onChange={e => setSearch(e.target.value)}
                placeholder="Search Posts"
                value={search}
            ></Input>
        </StyledForm>
    );
};

const StyledForm = styled.form`
    width: 100%;
    max-width: 300px;
`;

const Input = styled.input`
    width: 100%;
    padding: 5px;
    border-radius: 5px;
`;

const Label = styled.label`
    display: none;
`;

export default Form;
