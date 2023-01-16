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

// npx json-server -p 3100 -w data/db.json

function App() {
    const [posts, setPosts] = useState([
        {
            id: 1,
            title: 'My First Post',
            datetime: 'July 01, 2021 11:17:36 AM',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!',
        },
        {
            id: 2,
            title: 'My 2nd Post',
            datetime: 'July 01, 2021 11:17:36 AM',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!',
        },
        {
            id: 3,
            title: 'My 3rd Post',
            datetime: 'July 01, 2021 11:17:36 AM',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!',
        },
        {
            id: 4,
            title: 'My Fourth Post',
            datetime: 'July 01, 2021 11:17:36 AM',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!',
        },
    ]);
    const [search, setSearch] = useState('');
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
        const dateTime = new Date();
        const model = {
            id: id,
            title: name,
            datetime: '01.01.2022',
            body: content,
        };
        const list = [...posts, model];
        setPosts(list);
    };

    // const filteredPosts = posts.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))

    useEffect(() => {
        // const fetchData = async () => {
        // 	const res = await getItems();
        // 	if (res) setPosts(res);
        // }
        // fetchData();
    }, []);

    return (
        <div className="App">
            <Header></Header>
            <Nav search={search} setSearch={setSearch}></Nav>

            <Routes>
                <Route path="/" element={<Home posts={posts} />} />
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
