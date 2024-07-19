import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPost = async (id) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch post');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Fetch post error:', error);
      throw error;
    }
  };

  useEffect(() => {
    fetchPost(id)
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <header>
        <h1>Blog Post Application</h1>
      </header>
      <div className="post-details">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </>
  );
};

export default PostDetail;
