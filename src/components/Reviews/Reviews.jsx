import BookingForm from "components/BookingForm/BookingForm";
import ReviewItem from "components/ReviewItem/ReviewItem";

const Reviews = ({ props }) => {
    return (
        <div className="reviews-list">
            {props.reviews.map((review, index) => (
                <ReviewItem
                    key={index}
                    reviewerName={review.reviewer_name}
                    reviewerRating={review.reviewer_rating}
                    comment={review.comment}
                />
            ))}
            <BookingForm />
        </div>
    );
};
export default Reviews;