import { collection, query, limit, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/clientApp";
import Home from "../components/Home";
import Loading from "./Loading"
import Link from "next/link";

const HomeIndexPage = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [articleData, setArticleData] = useState([]);
	const [poemData, setPoemData] = useState([]);
	const [ShortStoryData, setShortStoryData] = useState([]);


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

			setLoading(true);
			const poemsCollection = collection(db, "poems");
		const poemsQuery = query(poemsCollection, limit(2));
		getDocs(poemsQuery)
			.then((querySnapshot) => {
				const data = querySnapshot.docs.map((doc) => {
					const id = doc.id;
					const { title, author, publishedAt, excerpt, content, imageURL, slug } =
						doc.data();
					return { id, title, author, publishedAt, excerpt, content, imageURL, slug };
				});
				setPoemData(data);
				setLoading(false);
			})
			.catch((error) => {
				setError(error);
				setLoading(false);
			});

			setLoading(true);
			const shortstoriesCollection = collection(db, "shortstories");
		const shortstoriesQuery = query(shortstoriesCollection, limit(2));
		getDocs(shortstoriesQuery)
			.then((querySnapshot) => {
				const data = querySnapshot.docs.map((doc) => {
					const id = doc.id;
					const { title, author, publishedAt, excerpt, content, imageURL, slug } =
						doc.data();
					return { id, title, author, publishedAt, excerpt, content, imageURL, slug };
				});
				setShortStoryData(data);
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
		
			<Home articles={articleData} poems={poemData} shortstories={ShortStoryData} />
			<Link href="/articles">
				View articles
			</Link>
						

		</div>
	);
};

export default HomeIndexPage;

