import React from 'react';
import {  useNavigate } from 'react-router-dom';
import '../App.css'

const Post = ({ post, handleDelete }) => {
  const navigate=useNavigate();
  return (
    <div className='card'>
      <h3>{post.title.substring(0,50)}...</h3>
      <p>{post.body.substring(0, 100)}...</p>
      <div className="card-footer">
      <button onClick={()=>navigate(`/posts/${post.id}`)}>Read More</button>
      <button className='delete' onClick={() => handleDelete(post.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Post;
