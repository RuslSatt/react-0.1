import './normalize.css';
import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Home from './Components/Content/Home';
import Post from './Components/Content/Post';
import About from './Components/Content/About';
import { Route, Routes } from 'react-router-dom';
import PostPage from './Components/Content/PostPage';
import { EditPage } from './Components/Content/EditPage';
import { DataProvider } from './context/DataContext';

// npx json-server -p 3100 -w data/db.json

function App() {
    return (
        <div className="App">
            <Header></Header>
            <DataProvider>
                <Nav></Nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/post" element={<Post />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/post/:id" element={<PostPage></PostPage>}></Route>
                    <Route path="/edit/:id" element={<EditPage></EditPage>}></Route>
                </Routes>
            </DataProvider>
            <Footer></Footer>
        </div>
    );
}

export default App;
