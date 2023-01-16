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

// npx json-server -p 3100 -w data/db.json

function App() {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const navigate = useNavigate();

    const handleDelete = id => {
        const updatedPosts = posts.filter(post => post.id !== id);
        if (updatedPosts?.length) {
            setPosts(updatedPosts);
            navigate('/');
        }
    };

    const handleSubmit = (name, content) => {
        const id = posts?.length ? posts[posts.length - 1] : 1;
        // const dateTime = new Date();
        const model = {
            id: id,
            title: name,
            datetime: '01.01.2022',
            body: content,
        };
        const list = [...posts, model];
        setPosts(list);
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
        if (value.toLowerCase().includes(search)) return true;
    };

    return (
        <div className="App">
            <Header></Header>
            <Nav search={search} setSearch={setSearch}></Nav>

            <Routes>
                <Route path="/" element={<Home posts={searchResult} />} />
                <Route path="/post" element={<Post handleSubmit={handleSubmit} />} />
                <Route path="/about" element={<About />} />
                <Route
                    path="/post/:id"
                    element={<PostPage posts={posts} handleDelete={handleDelete}></PostPage>}
                ></Route>
            </Routes>

            <Footer></Footer>
        </div>
    );
}

export default App;
