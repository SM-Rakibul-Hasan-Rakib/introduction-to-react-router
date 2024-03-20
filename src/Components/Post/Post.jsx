import { Link } from "react-router-dom";


const Post = ({ post }) => {
  const { id, title } = post;

  const userStyle = {
    border: "2px solid yellow",
    padding: "5px",
    borderRadius: "20px",
  };
  
  const handleShowDetails = () =>{

  }

  return (
    <div style={userStyle}>
      <h4>post of Id : {id}</h4>
      <p>{title}</p>
      <Link to={`/post/${id}`}>post Detail</Link>
      <Link to={`/post/${id}`}><button>Show Details</button></Link>
      <button onClick={handleShowDetails}Click to see details></button>
    </div>
  );
};

export default Post;
