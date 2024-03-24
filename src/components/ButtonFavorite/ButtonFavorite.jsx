import React, { useState, useEffect } from 'react';
import sprite from '../img/sprite.svg';
import css from "./ButtonFavorite.module.css"
const ButtonFavorite = ({ props }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setIsFavorite(storedFavorites.some(favorite => favorite._id === props._id));
    }, [props]);

    const toggleFavorite = () => {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (isFavorite) {
            favorites = favorites.filter(favorite => favorite._id !== props._id);
        } else {
            favorites.push(props);
        }
        localStorage.setItem('favorites', JSON.stringify(favorites));
        setIsFavorite(!isFavorite);
    };

    return (
        <button className={css.heart} onClick={toggleFavorite}>
            <svg className={isFavorite ? css.favorite_on : css.favorite_off} width={16} height={16}>
                <use href={`${sprite}#icon-heart`} />
            </svg>
        </button>
    );
};

export default ButtonFavorite;
