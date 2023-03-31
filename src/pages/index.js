import { collection, query, limit, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/clientApp";
import Home from "../components/Home";
import AddArticle from "../components/AddArticle";
import Link from "next/link";
import styles from "../styles/ArticleListItem.module.css";
const HomeIndexPage = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [articleData, setArticleData] = useState([]);


	useEffect(() => {
		setLoading(true);
		const articlesCollection = collection(db, "articles");
		const articlesQuery = query(articlesCollection, limit(3));
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
		return <div>Loading...</div>;
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
			<AddArticle />

		</div>
	);
};

export default HomeIndexPage;

