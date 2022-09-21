import React, { useState } from "react";
import { timestamp } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";

function ProjectComment() {
  const [newComment, setNewComment] = useState("");
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const commentToAdd = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: newComment,
      id: Math.random(),
      createdAt: timestamp.fromDate(new Date()),
    };

    console.log(commentToAdd);
  };
  return (
    <div className="project-comments">
      <h4>Project Comments</h4>

      <form className="add-comment" onSubmit={handleSubmit}>
        <label>
          <span>Add new comment:</span>
          <textarea
            required
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>
        </label>

        <button className="btn">Add Comment</button>
      </form>
    </div>
  );
}

export default ProjectComment;
