import React from 'react';
import styled from "styled-components";

const ListItem = ({item}) => {
	return (
		<Item>
			<Title>{item.title}</Title>
			<Text>{item.body}</Text>
		</Item>
	);
};

const Item = styled.li`
  background: azure;
  border-radius: 5px;
  padding: 5px;
  border: 1px solid #000;
  cursor: pointer;
`

const Title = styled.p`
  font-size: 18px;
  margin-bottom: 15px;
`

const Text = styled.p`
  font-size: 14px;

`

export default ListItem;
