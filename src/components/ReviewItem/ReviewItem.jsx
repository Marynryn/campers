import css from "./ReviewsItem.module.css"
const ReviewItem = ({ reviewerName, reviewerRating, comment }) => {
    const stars = Array.from({ length: reviewerRating }, (_, index) => (
        <span key={index}>&#9733;</span>
    ));

    return (
        <div className="review">
            <div className={css.avatar}>{reviewerName.charAt(0)}</div>
            <div className="details">
                <div className="name">{reviewerName}</div>
                <div className="rating">{stars}</div>
                <div className="comment">{comment}</div>
            </div>
        </div>
    );
};
export default ReviewItem;