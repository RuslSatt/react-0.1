import React from 'react';
import styled from "styled-components";
import {StyledLink} from "../Navigation/NavBar";

const ListItem = ({post}) => {
	const body = post.body.length > 25 ? post.body.slice(0, 25) + '...' : post.body;
	return (
		<Item>
			<StyledLink to={`/post/${post.id}`}>
				<Title>{post.title}</Title>
				<Date>{post.datetime}</Date>
				<Text>{body}</Text>
			</StyledLink>
		</Item>
	);
};

export const Date = styled.p`
  font-size: 14px;
  margin-bottom: 15px;
`

const Item = styled.li`
  background: #ecebeb;
  border-radius: 5px;
  padding: 10px;
  border: 1px solid #000;
  cursor: pointer;

  &:hover {
    transition: background-color, 0.15s;
    background: #a6a6a6;
    color: #fff;
  }
`

const Title = styled.p`
  font-size: 18px;
  margin-bottom: 15px;
`

const Text = styled.p`
  font-size: 14px;
`

export default ListItem;
