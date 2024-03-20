import { Link } from "react-router-dom";
import ''

const Post = ({ post }) => {
  const { id, title } = post;
  return (
    <div style={userStyle}>
      <h4>post of Id : {id}</h4>
      <p>{title}</p>
      <Link to={`/post/${id}`}>post Detail</Link>
    </div>
  );
};

export default Post;
