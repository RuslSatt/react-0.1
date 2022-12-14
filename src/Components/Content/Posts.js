import React from 'react';
import styled from "styled-components";
import ListItem from "./ListItem";

const Posts = ({items}) => {

	const listItems = items.map(item => <ListItem item={item} key={item.id}/>)

	return (
		<List>
			{listItems}
		</List>
	);
};

const List = styled.ul`
  padding: 10px;

  li {
    margin-bottom: 20px;
  }

  li:last-child {
    margin-bottom: 0;
  }
`

export default Posts;
