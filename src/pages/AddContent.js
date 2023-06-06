import AddArticle from "../components/Articles/AddArticle";
import AddPoem from "../components/Poems/AddPoem";
import AddBookReview from "../components/BookReview/AddBookReview";
import AddEssay from "../components/Essay/AddEssay";
import AddAppReview from "../components/AppReview/AddAppReview";
import AddShortStory from "../components/ShortStory/AddShortStory";
import AddInterview from "../components/Interviews/AddInterview";

const AddContent = () => {
    return(
        <div>
			<AddArticle />
			<AddPoem />
			<AddBookReview />
			<AddAppReview />
			<AddEssay />
			
			<AddInterview />

			<br></br>
			<AddShortStory />

			

        </div>
    );

}

export default AddContent;