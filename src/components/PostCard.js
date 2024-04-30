import React from 'react';
import './PostCard.css'; // Make sure this CSS file exists and is styled
import { useNavigate } from 'react-router-dom';
import { supabase } from '../client'; // Add this import
import dayjs from 'dayjs'; // Add this import for date formatting

const PostCard = ({ id, title, content, author, upvotes, created_at }) => {
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate(`/post-details/${id}`);
  };

  const handleUpvote = async (e) => {
    e.stopPropagation(); // Prevent navigating to post details when upvoting

    // Increment the upvote count
    const { error } = await supabase
      .from('Posts')
      .update({ upvotes: upvotes + 1 })
      .eq('id', id);

    if (error) {
      console.error('Error upvoting post:', error);
    } else {
      // If you had a local state for posts, you would update it here to re-render the component
      // For now, you can console log or alert for success
      console.log('Post upvoted successfully!');
      // Optional: Trigger a re-fetch or state update to show the new upvote count
    }
  };

  // Format the creation time using dayjs
  const formattedTime = dayjs(created_at).format('MMMM D, YYYY [at] h:mm A');

  return (
    <div className="PostCard" onClick={handleDetails}>
      <h3>{title}</h3>
      <p>Content: {content}</p>
      <p>Author: {author}</p>
      <p>Upvotes: {upvotes}</p>
      <p>Created At: {formattedTime}</p> {/* Display formatted creation time */}
      <button onClick={handleUpvote}>Upvote</button>
    </div>
  );
};

export default PostCard;
