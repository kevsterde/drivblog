"use client";

import moment from "moment";
import { useState } from "react";
import CommentData from "@/models/CommentData";

interface CommentProps {
  comment: CommentData;
  depth: number;
  maxDepth: number;
  onReply: (commentId: string, content: string) => void;
}

const CardComment = ({ comment, depth, maxDepth, onReply }: CommentProps) => {
  const { id, name, content, timestamp, replies } = comment;
  const date = moment(timestamp);
  const formattedTimestamp = date.fromNow();
  const [replyContent, setReplyContent] = useState<string>("");
  const [isReplying, setIsReplying] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (replyContent.trim()) {
      onReply(id, replyContent);
      setReplyContent("");
      setIsReplying(false);
    }
  };

  return (
    <section className="blog-content-comment-card">
      <div className="card-title">
        <h4>{name}</h4>
        <span>{formattedTimestamp}</span>
      </div>
      <p>{content}</p>

      {depth < maxDepth && (
        <>
          <a
            className="btn-card-reply"
            onClick={() => setIsReplying(!isReplying)}
          >
            {isReplying ? "CANCEL" : "REPLY"}
          </a>

          {isReplying && (
            <form className="reply-form" onSubmit={handleSubmit}>
              <textarea
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
                placeholder="Write your reply..."
                required
              />
              <button type="submit">Submit Reply</button>
            </form>
          )}
        </>
      )}

      {depth < maxDepth && replies && (
        <div className="replies">
          {replies.map((reply) => (
            <CardComment
              key={reply.id}
              comment={reply}
              depth={depth + 1}
              maxDepth={maxDepth}
              onReply={onReply}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default CardComment;
