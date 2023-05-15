
import { useState } from "react";
import { addDoc, collection, query, where, getDocs, limit } from "firebase/firestore";
import { db, storage } from "../../../firebase/clientApp";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const AddShortStory = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [imageURLInput, setImageURLInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const generateExcerpt = (content) => {
    const lines = content.split("\n").slice(0, 3);
    return lines.join("\n");
  };


  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '-')
      .trim();
  };

  const slugExists = async (slug) => {
    const shortstoriesRef = collection(db, "shortstories");
    const q = query(shortstoriesRef, where("slug", "==", slug), limit(1));
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      let imageURL = imageURLInput;

      if (image) {
        const storageRef = ref(storage, `shortstory-images/${image.name}`);
        const uploadTaskSnapshot = await uploadBytes(storageRef, image);
        imageURL = await getDownloadURL(uploadTaskSnapshot.ref);
        console.log("Image uploaded successfully:", imageURL);
      }

      let slug = generateSlug(title);
      let isUniqueSlug = false;

      while (!isUniqueSlug) {
        const exists = await slugExists(slug);

        if (exists) {
          const randomNumber = Math.floor(Math.random() * 9000) + 1000;
          slug = `${slug}-${randomNumber}`;
        } else {
          isUniqueSlug = true;
        }
      }

      await addDoc(collection(db, "shortstories"), {
        title,
        author,
        content,
        imageURL,
        excerpt: generateExcerpt(content),
        publishedAt: new Date().toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
        slug: slug, // Add the unique slug
      });

      alert("ShortStory added successfully!");

      setTitle("");
      setAuthor("");
      setContent("");
      setImage(null);
      setImageURLInput("");
    } catch (err) {
      console.error("Error adding document: ", err);
      alert("Error adding document: " + err.message);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <br />
      <label>
        Author:
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </label>
      <br />
      <label>
        Content:
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      </label>
      <br />
      <label>
        Image Source:

        <label>
          <input
            type="radio"
            name="imageSource"
            onChange={() => {
              setImage(null);
              setImageURLInput("");
            }}
            checked={!image}
          />
          URL
        </label>
        <label>
          <input
            type="radio"
            name="imageSource"
            onChange={(e) => {
              if (e.target.checked) {
                setImage({});
                setImageURLInput("");
              }
            }}
            checked={!!image}
          />
          Upload
        </label>

      </label>
      <br />
      {image ? (
        <label>
          Image:
          <input type="file" onChange={handleImageChange} />
        </label>
      ) : (
        <label>
          Image URL:
          <input
            type="text"
            value={imageURLInput}
            onChange={(e) => setImageURLInput(e.target.value)}
          />
        </label>
      )}
      <br />
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  );
};

export default AddShortStory;

