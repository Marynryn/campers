import Rating from "components/Rating/Rating";

import Location from "components/Location/Location";
import Features from "components/Features/Features";
import Price from "components/Price/Price";

const AdvertItem = ({ props }) => {
    return (
        <div>
            <div>
                <img alt="car" src={props.gallery[0]} />
            </div>
            <div>
                <h3>{props.name}</h3>
                <Price props={props} />
                <Rating props={props} />
                <Location props={props} />
                <p>{props.description}</p>
                <Features props={props} />
                <button className="" type="button">Show more</button>
            </div>
        </div>
    )
}
export default AdvertItem;