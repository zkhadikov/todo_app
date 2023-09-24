import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {API_URL} from "../../constants.js";

function NewPostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { title, body };
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {  "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (response.ok) {
      const post = await response.json();
      navigate(`/posts/${post.id}`);
    } else {
      console.error("error creating post:", response);
    }
  };

  return (
    <div>
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="post-title">Title:</label>
          <input
            id="post-title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="post-body">Body:</label>
          <textarea
            id="post-body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submitt">Create Post</button>
        </div>
      </form>
    </div>
  );
}

export default NewPostForm;
