import { collection, query, limit, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/clientApp";
import Home from "../components/Home";
import AddArticle from "../components/AddArticle";

const HomeIndexPage = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [articleData, setArticleData] = useState([]);


		useEffect(() => {
			setLoading(true);
			const articlesCollection = collection(db, "articles");
			const articlesQuery = query(articlesCollection, limit(5));
			getDocs(articlesQuery)
				.then((querySnapshot) => {
					const data = querySnapshot.docs.map((doc) => {
						const id = doc.id;
						const { title, author, publishedAt, excerpt, content, imageURL } =
							doc.data();
						return { id, title, author, publishedAt, excerpt, content, imageURL };
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
				<AddArticle />

			</div>
		);
	};

	export default HomeIndexPage;

