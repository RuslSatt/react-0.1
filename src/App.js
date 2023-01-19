import './normalize.css';
import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import { useEffect, useState } from 'react';
import Footer from './Components/Footer';
import Home from './Components/Content/Home';
import Post from './Components/Content/Post';
import About from './Components/Content/About';
import { Route, Routes, useNavigate } from 'react-router-dom';
import PostPage from './Components/Content/PostPage';
import api from './api/posts';
import { EditPage } from './Components/Content/EditPage';
import useWindowSize from './hooks/useWindowSize';

// npx json-server -p 3100 -w data/db.json

function App() {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const navigate = useNavigate();
    const { width } = useWindowSize();

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

    const handleEdit = async (id, title, body) => {
        const updatedPosts = {
            id,
            title,
            body,
        };

        try {
            const response = await api.put(`/posts/${id}`, updatedPosts);
            setPosts(posts.map(model => (model.id === id ? { ...response.data } : model)));
            navigate('/');
        } catch (err) {
            console.log(err.response.data);
        }
    };

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

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await api.get('/posts');
                setPosts(response.data);
            } catch (err) {
                console.log(err.response.data);
            }
        };
        fetchPosts();
    }, []);

    useEffect(() => {
        const filteredResults = posts.filter(model => {
            return includesSearch(model.body) || includesSearch(model.title);
        });
        setSearchResult(filteredResults);
    }, [posts, search]);

    const includesSearch = value => {
        if (value?.toLowerCase().includes(search)) return true;
    };

    return (
        <div className="App">
            <Header width={width}></Header>
            <Nav search={search} setSearch={setSearch}></Nav>

            <Routes>
                <Route path="/" element={<Home posts={searchResult} />} />
                <Route path="/post" element={<Post handleSubmit={handleSubmit} />} />
                <Route path="/about" element={<About />} />
                <Route
                    path="/post/:id"
                    element={<PostPage posts={posts} handleDelete={handleDelete}></PostPage>}
                ></Route>
                <Route
                    path="/edit/:id"
                    element={<EditPage handleEdit={handleEdit} posts={posts}></EditPage>}
                ></Route>
            </Routes>

            <Footer></Footer>
        </div>
    );
}

export default App;
