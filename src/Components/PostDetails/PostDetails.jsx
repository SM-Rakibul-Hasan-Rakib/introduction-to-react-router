import {
  Navigate,
  useLoaderData,
  useNavigate,
  useParams,
} from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const params = useParams();
  const navigate = useNavigate();
  console.log(params);
  const { id, title, body } = post;

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h3>Post details about: {id} </h3>
      <p>Title : {title} </p>
      <p>
        <small>{body}</small>
      </p>
      <button onClick={handleBack}>go back</button>
    </div>
  );
};

export default PostDetails;
