import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostDetail from './components/PostDetail';
import Home from './components/Home';
import './App.css'

const App = () => {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/posts/:id" element={<PostDetail/>} />
        </Routes>
     
    </Router>
  );
};

export default App;
