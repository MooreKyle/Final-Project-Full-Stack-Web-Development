import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../client';

const CreatePost = () => {
    const navigate = useNavigate();
    const [post, setPost] = useState({
        title: "",
        content: "",
        author: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPost({ ...post, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const { data, error } = await supabase
            .from('Posts') // Adjust this to match your table name for posts
            .insert([post]);

        if (error) {
            console.error('Error details:', error); // Log detailed error
            alert(`There was an error creating the post: ${error.message}`);
        } else {
            console.log('Post created:', data); // For debugging
            navigate('/'); // Navigate to the home page on success
        }
    };

    return (
        // The form for creating a post
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input
                type="text"
                id="title"
                name="title"
                value={post.title}
                onChange={handleInputChange}
            />
            
            <label htmlFor="content">Content:</label>
            <textarea
                id="content"
                name="content"
                value={post.content}
                onChange={handleInputChange}
            />
            
            <label htmlFor="author">Author:</label>
            <input
                type="text"
                id="author"
                name="author"
                value={post.author}
                onChange={handleInputChange}
            />
            
            <button type="submit">Create Post</button>
        </form>
    );
}

export default CreatePost;
