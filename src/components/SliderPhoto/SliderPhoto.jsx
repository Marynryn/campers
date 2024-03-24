import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import css from "./SliderPhoto.module.css"
const SliderPhoto = ({ props }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true
    };

    return (
        <Slider {...settings}>
            {props.map((advert, index) => (advert.gallery.length > 0 &&
                (<li className={css.img_box} key={index}>
                    <img className={css.slider_photo} src={advert.gallery[0]} alt={`Slide ${index + 1}`} />
                </li>
                )))}
        </Slider>
    );
};

export default SliderPhoto;

