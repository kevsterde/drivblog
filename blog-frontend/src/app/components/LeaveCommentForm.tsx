"use client";

import { useState } from "react";

interface LeaveCommentProps {
  onReply: (commentId: string | null, content: string) => void;
}

const LeaveCommentForm = ({ onReply }: LeaveCommentProps) => {
  const [replyContent, setReplyContent] = useState<string>("");
  const id = null;
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (replyContent.trim()) {
      onReply(id, replyContent);
      setReplyContent("");
    }
  };

  return (
    <>
      <div className="blog-content-comment-leave">
        <h4 className="heading4">Leave a comment</h4>

        <form className="reply-form" onSubmit={handleSubmit}>
          <textarea
            value={replyContent}
            onChange={(e) => setReplyContent(e.target.value)}
            placeholder="Write your comment..."
            required
          />
          <button type="submit">Submit Comment</button>
        </form>
      </div>
    </>
  );
};

export default LeaveCommentForm;
