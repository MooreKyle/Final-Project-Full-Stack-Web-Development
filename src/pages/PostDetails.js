import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client';
import CommentForm from './CommentForm';
import CommentsList from './CommentsList';

const PostDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchPostAndComments = async () => {
      const { data: postData, error: postError } = await supabase
        .from('Posts')
        .select()
        .eq('id', id)
        .single();

      if (postError) {
        console.error('Error fetching post:', postError);
      } else {
        setPost(postData);
      }

      const { data: commentsData, error: commentsError } = await supabase
        .from('comments')
        .select()
        .eq('postId', id);

      if (commentsError) {
        console.error('Error fetching comments:', commentsError);
      } else {
        setComments(commentsData);
      }
    };

    fetchPostAndComments();
  }, [id]);

  const upvotePost = async () => {
    const { data, error } = await supabase
      .from('Posts')
      .update({ upvotes: (post.upvotes || 0) + 1 })
      .eq('id', id);

    if (error) {
      console.error('Error upvoting post:', error);
    } else {
      setPost({ ...post, upvotes: data[0].upvotes });
    }
  };

  const deletePost = async () => {
    const userConfirmation = window.confirm('Are you sure you want to delete this post?');
    if (userConfirmation) {
      const { error } = await supabase
        .from('Posts')
        .delete()
        .match({ id });

      if (error) {
        console.error('Error deleting post:', error);
      } else {
        // Post deleted successfully
        navigate('/'); // Redirect user to the home page or another appropriate page
      }
    }
  };

  const addNewComment = (newComment) => {
    setComments((prevComments) => [...prevComments, newComment]);
  };

  return (
    <div>
      {post ? (
        <>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <p>Author: {post.author}</p>
          <p>Upvotes: {post.upvotes}</p>
          <button onClick={upvotePost}>Upvote</button>
          <button onClick={deletePost}>Delete Post</button>
          <button onClick={() => navigate(`/edit-post/${id}`)}>Edit Post</button>
          <CommentForm postId={id} onNewComment={addNewComment} />
          <CommentsList comments={comments} />
        </>
      ) : (
        <p>Loading post details...</p>
      )}
    </div>
  );
};

export default PostDetails;
