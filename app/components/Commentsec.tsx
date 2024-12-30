"use client"
import React, { useState } from "react";

const CommentSec: React.FC = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  const handleCommentSubmit = () => {
    if (newComment.trim() !== "") {
      setComments([newComment, ...comments]);
      setNewComment("");
    }
  };

  return (
    <div className="w-full my-24 max-w-lg mx-auto  p-4 border rounded-md shadow-md bg-slate-300 dark:bg-gray-800 dark:border-gray-700">
      <h2 className="text-lg font-semibold mb-4 dark:text-white">Comments</h2>
      
      {/* Display Comments */}
      <div className="space-y-2">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-700 p-2 rounded-md text-sm dark:text-white"
            >
              {comment}
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-sm dark:text-gray-400">
            No comments yet. Be the first to comment!
          </p>
        )}
      </div>

      {/* Input Field */}
      <div className="mt-4 flex items-center gap-2">
        <input
          type="text"
          placeholder="Write your comment here..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="flex-1 p-2 border rounded-md focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        <button
          onClick={handleCommentSubmit}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Publish Comment
        </button>
      </div>
    </div>
  );
};

export default CommentSec;
