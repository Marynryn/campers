import Equipment from "components/Equipment/Equipment"
import css from "./About.module.css"
import { Link } from "react-router-dom";

const About = ({ props }) => {

    const advert = props[1];
    return (
        <div className={css.central_box}>
            <div className={css.about_title}>
                <h1 className={css.title}>Camper Van Rental</h1>
                <p className={css.about_paragraph}> Itching to try out van life? Camper vans offer a more affordable and nimble way to travel far solo RV-ers, couples or small groups looking to stay light on their feet.</p>
                <Link to="catalog">
                    <button type="button" className={css.button_to_catalog}>Find Your Dream Camper Van</button>
                </Link>
            </div>
            <div className={css.about_equipment}>
                <h3 className={css.name}>Choose a van that suits <span className={css.you}>you</span></h3>
                <Equipment props={advert} />
            </div>
        </div>
    )
}
export default About