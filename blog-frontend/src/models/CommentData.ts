export default interface CommentData {
  id: string;
  name: string;
  content: string;
  timestamp: string;
  replies?: CommentData[];
}
