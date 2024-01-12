import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { updatePost } from "../redux/actions/postActions";

export const UpdatePost = () => {
  const location = useLocation();
  const data = location.state;

  const posts = useSelector((state) => state.postReducer);

  var oldPost;
  // eslint-disable-next-line no-unused-vars
  const oldBlogs = posts.map((post) => {
    if (post.id == data.id) {
      oldPost = post;
      return post;
    }
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [newPostTitle, setNewPostTitle] = useState(oldPost.titlePost);
  const [newPostBody, setNewPostBody] = useState(oldPost.bodyPost);
  const [newTotalLikes] = useState(oldPost.totalLikes);
  const [newLiked] = useState(oldPost.liked);

  const handleSubmit = (e) => {
    e.preventDefault();

    let todoObj = {
      id: data.id,
      titlePost: newPostTitle,
      bodyPost: newPostBody,
      totalLikes: newTotalLikes,
      liked: newLiked,
    };
    setNewPostTitle("");
    setNewPostBody("");
    dispatch(updatePost(todoObj));

    navigate("/");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="card">
          <div className="card-header" style={{ textAlign: "left" }}>
            <h2 style={{ textAlign: "center" }}>Updating Post..</h2>
          </div>
          <div className="card-body" style={{ textAlign: "left" }}>
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Post Title</label>
                  <input
                    className="form-control"
                    required
                    value={newPostTitle}
                    onChange={(e) => setNewPostTitle(e.target.value)}
                  ></input>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="form-group">
                  <label>Post Content</label>
                  <textarea
                    cols="40"
                    rows="9"
                    className="form-control"
                    required
                    value={newPostBody}
                    onChange={(e) => setNewPostBody(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer" style={{ textAlign: "left" }}>
            <button className="btn btn-primary" type="submit">
              Update
            </button>
            {"   "}
            || {"   "}
            <Link className="btn btn-danger" to={"/"}>
              Back
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};
