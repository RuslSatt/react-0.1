import React from 'react';
import {Main} from "./Home";
import {Link, useParams} from "react-router-dom";
import styled from "styled-components";
import {Date} from "./ListItem";

const PostPage = ({posts, handleDelete}) => {
	const {id} = useParams();
	const post = posts.find(post => post.id.toString() === id);

	return (
		<Main>
			{post &&
				<>
					<H2>{post.title}</H2>
					<Date>{post.datetime}</Date>
					<Body>{post.body}</Body>
					<Button onClick={() => handleDelete(post.id)}>Delete</Button>
				</>
			}
			{!post &&
				<>
					<H2>This post not found</H2>
					<Link to="/">Please, move to home page</Link>
				</>
			}
		</Main>
	);
};

const H2 = styled.h2`
  font-size: 18px;
  margin-bottom: 15px;
`

const Body = styled.p`
  margin-bottom: 15px;
`

const Button = styled.button`
  padding: 5px 15px;
  border-radius: 5px;
  background: crimson;
  color: #fff;
`

export default PostPage;
