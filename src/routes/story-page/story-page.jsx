import "./story-page.css";
import { Link } from "react-router-dom";

const StoryPage = () => {
  return (
    <div className="story page">
      <h1>Stories of components</h1>
      <Link to={`/`}>Back to home</Link>
      <Link to={`/stories/component`}>A-component</Link>
      <Link to={`/stories/button`}>Example Button</Link>
    </div>
  );
};

export default StoryPage;
