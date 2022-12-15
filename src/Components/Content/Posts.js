import React from 'react';
import styled from "styled-components";
import ListItem from "./ListItem";

const Posts = ({posts}) => {

	const listItems = posts.map(post => <ListItem post={post} key={post.id}/>)

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
