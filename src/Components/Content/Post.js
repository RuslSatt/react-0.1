import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Content.module.scss';

const Post = ({ handleSubmit }) => {
    const [name, setName] = useState('');
    const [content, setContent] = useState('');

    const navigate = useNavigate();

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
