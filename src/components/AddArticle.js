
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/clientApp";

const AddArticle = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedAt, setPublishedAt] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [imageURL, setImageURL] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "articles"), {
        title,
        author,
        publishedAt,
        excerpt,
        content,
        imageURL,
      });
      alert("Article added successfully!");
      setTitle("");
      setAuthor("");
      setPublishedAt("");
      setExcerpt("");
      setContent("");
      setImageURL("");
    } catch (error) {
      alert("Failed to add article: " + error.message);
    }
  };

  return (
    <div>
      <h2>Add Article</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </label>
        <label>
          Author:
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </label>
        <label>
          Published At:
          <input type="date" value={publishedAt} onChange={(e) => setPublishedAt(e.target.value)} required />
        </label>
        <label>
          Excerpt:
          <textarea value={excerpt} onChange={(e) => setExcerpt(e.target.value)} required />
        </label>
        <label>
          Content:
          <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
        </label>
        <label>
          Image URL:
          <input type="text" value={imageURL} onChange={(e) => setImageURL(e.target.value)} required />
        </label>
        <button type="submit">Add Article</button>
      </form>
    </div>
  );
};

export default AddArticle;
