import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Reviews from './components/Reviews/Reviews';
import Dashboard from './components/Dashboard/Dashboard';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}>HOME</Route>
        <Route path='/reviews' element={<Reviews />}>REVIEWS</Route>
        <Route path='/dashboard' element={<Dashboard />}>DASHBOARD</Route>
        <Route path='/blogs' element={<Blogs />}>BLOGS</Route>
        <Route path='/about' element={<About />}>ABOUT</Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
