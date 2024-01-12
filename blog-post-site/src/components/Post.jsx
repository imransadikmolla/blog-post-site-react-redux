/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removePost, likePost } from "../redux/actions/postActions";
import { AiFillDelete } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";

const Post = ({ post }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onLikePost = (post) => {
    dispatch(likePost(post));
  };
  const onEditPost = (postId) => {
    navigate(`/updatePost/${postId}`, { state: { id: postId } });
  };

  return (
    <div key={post.id} className="post-box">
      <div className="card post-card" style={{ width: "30rem" }}>
        <div className="card-body">
          <h5 className="card-title">{post.titlePost}</h5>

          <p className="card-text" style={{ textAlign: "justify" }}>
            {post.bodyPost}
          </p>

          <div className="alert alert-success reactions" role="alert">
            This post has been reacted by {post.totalLikes} people.
          </div>

          <div>
            <span
              className="position-absolute left-0 start-0 translate-middle badge rounded-pill bg-success"
              onClick={() => onEditPost(post.id)}
            >
              <MdModeEdit size="20px" />
            </span>
            <span
              className="position-absolute right-0 start-50 translate-middle badge rounded-pill bg-light btn btn-lg"
              onClick={() => onLikePost(post)}
            >
              {post.liked === true ? (
                <FcLike size="30px" color="red" />
              ) : (
                <FcDislike size="25px" color="blue" />
              )}
            </span>
            <span
              className="position-absolute bottom-10 start-100 translate-middle badge rounded-pill bg-danger"
              onClick={() => dispatch(removePost(post.id))}
            >
              <AiFillDelete size="20px" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
