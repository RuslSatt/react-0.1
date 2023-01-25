import React from 'react';
import { useContext } from 'react';
import DataContext from '../../context/DataContext';
import { Main } from './Home';
import { Link, useParams, useNavigate } from 'react-router-dom';
import api from '../../api/posts';

const PostPage = () => {
    const { id } = useParams();
    const { posts, setPosts } = useContext(DataContext);

    const navigate = useNavigate();

    const post = posts.find(post => post.id.toString() === id);

    const handleDelete = async id => {
        try {
            await api.delete(`/posts/${id}`);
            const updatedPosts = posts.filter(post => post.id !== id);
            setPosts(updatedPosts);
            navigate('/');
        } catch (err) {
            console.log(err.response.data);
        }
    };

    return (
        <Main>
            {post && (
                <>
                    <h2 className="text-lg leading-none mb-2">{post.title}</h2>
                    {/* <p className="text-sm mb-2">{post.datetime}</p> */}
                    <p className="mb-5">{post.body}</p>
                    <div>
                        <button
                            className="py-1.5 px-4 bg-slate-500 rounded"
                            onClick={() => handleDelete(post.id)}
                        >
                            Delete
                        </button>
                        <Link className="py-1.5 px-4 bg-slate-500 rounded" to={`/edit/${post.id}`}>
                            Edit
                        </Link>
                    </div>
                </>
            )}
            {!post && (
                <>
                    <h2>This post not found</h2>
                    <Link to="/">Please, move to home page</Link>
                </>
            )}
        </Main>
    );
};

export default PostPage;
