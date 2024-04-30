import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client';

const EditPost = () => {
  const { id } = useParams(); // Gets the post ID from the URL.
  const navigate = useNavigate();
  const [post, setPost] = useState({ title: '', content: '', author: '' });

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from('Posts')
        .select()
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching post:', error);
      } else {
        setPost({ title: data.title, content: data.content, author: data.author });
      }
    };

    fetchPost();
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error } = await supabase
      .from('Posts')
      .update({ title: post.title, content: post.content, author: post.author })
      .eq('id', id);

    if (error) {
      alert('Error updating post:', error.message);
    } else {
      navigate(`/post-details/${id}`); // Redirects to the post details page.
    }
  };

  return (
    <div>
      <h1>Edit Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            value={post.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            value={post.content}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input
            id="author"
            name="author"
            type="text"
            value={post.author}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Update Post</button>
      </form>
    </div>
  );
};

export default EditPost;
