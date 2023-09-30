import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {createPost} from "../../services/postService.js";

function NewPostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { title, body };

    try {
      const post = await createPost(payload);
      navigate(`/posts/${post.id}`);
    } catch (error) {
      console.error("Failed to create post:", error);
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
