import BookingForm from "components/BookingForm/BookingForm";
import ReviewItem from "components/ReviewItem/ReviewItem";
import css from "./Reviews.module.css"
const Reviews = ({ props }) => {
    return (
        <div className={css.reviews_box}>
            <ul className={css.reviews_list}>
                {props.reviews.map((review, index) => (<li className={css.review_item} key={index}>
                    <ReviewItem

                        reviewerName={review.reviewer_name}
                        reviewerRating={review.reviewer_rating}
                        comment={review.comment}
                    /></li>
                ))}</ul>
            <BookingForm />
        </div>
    );
};
export default Reviews;