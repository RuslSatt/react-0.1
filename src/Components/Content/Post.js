import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import api from '../../api/posts';
import DataContext from '../../context/DataContext';
import styles from './Content.module.scss';

const Post = () => {
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const { posts, setPosts } = useContext(DataContext);

    const navigate = useNavigate();

    const handleSubmit = async (name, content) => {
        const id = posts?.length ? posts[posts.length - 1].id + 1 : 1;
        const model = {
            id: id,
            title: name,
            body: content,
        };

        try {
            const response = await api.post('/posts', model);
            const list = [...posts, response.data];
            setPosts(list);
            navigate('/');
        } catch (err) {
            console.log(err.response.data);
        }
    };

    return (
        <main className={styles.main}>
            <p className={styles.postTitle}>Create post</p>
            <div className={styles.nameBlock}>
                <label>Set a post name</label>
                <input
                    value={name}
                    className={styles.input}
                    type="text"
                    onChange={e => setName(e.target.value)}
                ></input>
            </div>
            <div className={styles.contentPost}>
                <label>Set a post content</label>
                <textarea
                    value={content}
                    className={styles.textarea}
                    type="text"
                    onChange={e => setContent(e.target.value)}
                ></textarea>
            </div>
            <button
                onClick={() => {
                    handleSubmit(name, content);
                    navigate('/');
                }}
                className={styles.button}
            >
                Create post
            </button>
        </main>
    );
};

export default Post;
