import React from 'react';

const CommentsList = ({ comments }) => {
  return (
    <div>
      {comments && comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.author}: {comment.commentText}</p>
          {/* Add logic for delete button if needed */}
        </div>
      ))}
    </div>
  );
};

export default CommentsList;