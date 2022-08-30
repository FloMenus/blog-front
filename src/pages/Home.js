import { Link } from "react-router-dom";

import H2 from "../components/H2";

const Home = () => {
  return (
    <div className="home">
      <H2>Home</H2>
      <Link to="/post/create">Create Post</Link>
      <Link to="/categories/create">Create Category</Link>
    </div>
  );
};

export default Home;
