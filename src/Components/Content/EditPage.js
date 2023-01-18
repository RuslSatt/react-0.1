import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './Content.module.scss';

export const EditPage = ({ postTitle, postBody, handleEdit, posts }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const { id } = useParams();
    const post = posts.find(post => post.id.toString() === id);

    useEffect(() => {
        if (!post) return;

        setTitle(post.title);
        setBody(post.body);
    }, [post, setTitle, setBody]);

    return (
        <main className={styles.main}>
            {post && (
                <>
                    <p className={styles.postTitle}>Create post</p>
                    <div className={styles.nameBlock}>
                        <label>Edit a post name</label>
                        <input
                            value={title}
                            className={styles.input}
                            type="text"
                            onChange={e => setTitle(e.target.value)}
                        ></input>
                    </div>
                    <div className={styles.contentPost}>
                        <label>Edit a post content</label>
                        <textarea
                            value={body}
                            className={styles.textarea}
                            type="text"
                            onChange={e => setBody(e.target.value)}
                        ></textarea>
                    </div>
                    <button
                        onClick={() => {
                            handleEdit(post.id, title, body);
                        }}
                        className={styles.button}
                    >
                        Edit post
                    </button>
                </>
            )}
            {!post && (
                <>
                    <h2>This post not found</h2>
                    <Link to="/">Please, move to home page</Link>
                </>
            )}
        </main>
    );
};
