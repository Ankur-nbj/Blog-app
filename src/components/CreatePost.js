import React, { useState } from 'react';


const CreatePost = ({ onPostCreated }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const createPost = async (post) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
      });
      if (!response.ok) {
        throw new Error('Failed to create post');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Create post error:', error);
      throw error;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost({ title, body })
      .then(newPost => {
        onPostCreated(newPost);
        setTitle('');
        setBody('');
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <div className="form-container">
      <h1>Create a Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label><strong>Title</strong></label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label><strong>Body</strong></label>
          <textarea rows="5" value={body} onChange={(e) => setBody(e.target.value)} required></textarea>
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
