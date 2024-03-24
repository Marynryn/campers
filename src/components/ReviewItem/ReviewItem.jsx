import css from "./ReviewsItem.module.css"
const ReviewItem = ({ reviewerName, reviewerRating, comment }) => {
    const stars = Array.from({ length: reviewerRating }, (_, index) => (
        <span className={css.star} key={index}>&#9733;</span>
    ));

    return (
        <div className={css.review}>
            <div className={css.rating_box}>
                <div className={css.avatar}>{reviewerName.charAt(0)}</div>
                <div className={css.details}>
                    <div className={css.name}>{reviewerName}</div>
                    <div className={css.rating}>{stars}</div>
                </div>
            </div>
            <div className={css.comment}>{comment}</div>

        </div>
    );
};
export default ReviewItem;