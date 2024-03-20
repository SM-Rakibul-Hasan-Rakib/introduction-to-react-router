import { Link } from "react-router-dom";


const Post = ({ post }) => {
  const { id, title } = post;

  const userStyle = {
    border: "2px solid yellow",
    padding: "5px",
    borderRadius: "20px",
  };
  return (
    <div style={userStyle}>
      <h4>post of Id : {id}</h4>
      <p>{title}</p>
      <Link to={`/post/${id}`}>post Detail</Link>
    </div>
  );
};

export default Post;
