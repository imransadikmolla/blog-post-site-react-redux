import { useSelector } from "react-redux";
import Post from "./Post";

const Contents = () => {
  const posts = useSelector((state) => state.postReducer);
  return (
    <>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default Contents;
