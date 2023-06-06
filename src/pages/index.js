import { collection, query, limit, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/clientApp";
import Home from "../components/Home";
import AddArticle from "../components/Articles/AddArticle";
import AddPoem from "../components/Poems/AddPoem";
import AddBookReview from "../components/BookReview/AddBookReview";
import AddAppReview from "../components/AppReview/AddAppReview";
import AddEssay from "../components/Essay/AddEssay";
import AddInterview from "../components/Interviews/AddInterview";
import AddShortStory from "../components/ShortStory/AddShortStory";
import Loading from "./Loading"
import Link from "next/link";

const HomeIndexPage = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [articleData, setArticleData] = useState([]);


	useEffect(() => {
		setLoading(true);
		const articlesCollection = collection(db, "articles");
		const articlesQuery = query(articlesCollection, limit(4));
		getDocs(articlesQuery)
			.then((querySnapshot) => {
				const data = querySnapshot.docs.map((doc) => {
					const id = doc.id;
					const { title, author, publishedAt, excerpt, content, imageURL, slug } =
						doc.data();
					return { id, title, author, publishedAt, excerpt, content, imageURL, slug };
				});
				setArticleData(data);
				setLoading(false);
			})
			.catch((error) => {
				setError(error);
				setLoading(false);
			});
	}, []);
	if (loading) {
		return  <p>Loading</p>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<div>
		
					<Home articles={articleData} />
			<Link href="/articles">
				View articles
			</Link>
						

		</div>
	);
};

export default HomeIndexPage;

