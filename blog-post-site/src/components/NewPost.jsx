import { useState } from "react";
import { useDispatch } from "react-redux";
import { newPost } from "../redux/actions/postActions";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types, no-unused-vars
export const NewPost = ({ selectedTab, setSelectedTab }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostBody, setNewPostBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let date = new Date();
    let time = date.getTime();
    let todoObj = {
      id: time,
      titlePost: newPostTitle,
      bodyPost: newPostBody,
      totalLikes: 0,
      liked: false,
    };
    setNewPostTitle("");
    setNewPostBody("");
    dispatch(newPost(todoObj));
    setSelectedTab("Home");
    navigate("/");
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="How are you feeling today..."
          required
          value={newPostTitle}
          onChange={(e) => setNewPostTitle(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          value={newPostBody}
          onChange={(e) => setNewPostBody(e.target.value)}
          rows="8"
          className="form-control"
          id="body"
          placeholder="Tell us more about it"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};
