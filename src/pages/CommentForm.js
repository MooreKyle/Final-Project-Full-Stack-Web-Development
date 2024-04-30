import React, { useState } from 'react';
import { supabase } from '../client';

const CommentForm = ({ postId, onNewComment }) => {
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content) return;

    // Using 'Anonymous' as the author since there is no authentication system
    const { data, error } = await supabase.from('comments').insert([
      { postId: postId, commentText: content, author: 'Anonymous' }
    ]);

    if (error) {
      console.error('Error inserting comment:', error);
    } else {
      setContent('');
      onNewComment(data[0]); // Add this line if you want to handle the new comment in your state
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea 
        value={content} 
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your comment..."
      ></textarea>
      <button type="submit">Post Comment</button>
    </form>
  );
};

export default CommentForm;
