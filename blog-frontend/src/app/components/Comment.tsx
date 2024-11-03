"use client";
import CommentData from "@/models/CommentData";
import { useEffect, useState } from "react";
import CardComment from "./CardComment";

const Comment = () => {
  const [guestID, setguestID] = useState("");

  useEffect(() => {
    let uuid = localStorage.getItem("guestID");
    if (!uuid) {
      uuid = `${Math.floor(10000 + Math.random() * 90000)}`;
      localStorage.setItem("guestID", uuid);
    }
    setguestID(uuid);
  }, []);

  const [comments, setComments] = useState<CommentData[]>([]);
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const maxDepth = 4;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await fetch("http://localhost:9000/api/comments"); // Adjust the URL as needed
        const data = await response.json();
        console.log(data);
        setComments(data);
        console.log(loading);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleReply = async (commentId: string, content: string) => {
    setSending(true);
    const replyData = {
      parent_id: commentId,
      content,
      name: `${guestID}`,
    };

    try {
      const response = await fetch("http://localhost:9000/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(replyData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit reply");
      }

      const newComment = await response.json();

      setComments((prevComments) =>
        updateReplies(prevComments, commentId, newComment, 0, maxDepth)
      );
      setSending(false);
    } catch (error) {
      console.error("Error submitting reply:", error);
    }
  };

  function updateReplies(
    comments: CommentData[],
    commentId: string,
    newComment: CommentData,
    depth: number,
    maxDepth: number
  ): CommentData[] {
    return comments.map((comment) => {
      if (comment.id === commentId && depth < maxDepth) {
        return {
          ...comment,
          replies: [...(comment.replies || []), newComment],
        };
      } else if (comment.replies && depth < maxDepth) {
        return {
          ...comment,
          replies: updateReplies(
            comment.replies,
            commentId,
            newComment,
            depth + 1,
            maxDepth
          ),
        };
      }
      return comment;
    });
  }

  return (
    <div className="blog-content-comment">
      <h4 className="heading4">Comments on this post</h4>
      {sending && (
        <div className="blog-content-comment-sending">
          <h3>Submitting Reply...</h3>
        </div>
      )}
      {loading ? (
        <>Loading</>
      ) : (
        <>
          <p>{comments.length} comments</p>

          {comments.map((comment) => (
            <CardComment
              comment={comment}
              depth={0}
              maxDepth={maxDepth}
              key={comment.id}
              onReply={handleReply}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Comment;
