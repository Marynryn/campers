import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdverts } from "store/operations";
import { selectVisibleAdverts } from "store/selectors";
import AdvertItem from "components/AdvertItem/AdvertItem";
import css from "./AdvertsList.module.css"
const AdvertsList = () => {
    const dispatch = useDispatch();
    const visibleAdverts = useSelector(selectVisibleAdverts);

    const [displayedAdverts, setDisplayedAdverts] = useState([]);
    const advertsPerPage = 4;

    useEffect(() => {
        dispatch(fetchAdverts());
    }, [dispatch]);

    useEffect(() => {

        setDisplayedAdverts(visibleAdverts.slice(0, advertsPerPage));
    }, [visibleAdverts, advertsPerPage]);

    const handleLoadMore = () => {

        const nextPage = Math.ceil(displayedAdverts.length / advertsPerPage) + 1;
        const startIndex = (nextPage - 1) * advertsPerPage;
        const endIndex = Math.min(startIndex + advertsPerPage, visibleAdverts.length);

        setDisplayedAdverts(prevAdverts => [
            ...prevAdverts,
            ...visibleAdverts.slice(startIndex, endIndex)
        ]);
    };

    return (
        <div className={css.adverts_list}>
            <ul>
                {displayedAdverts.map((advert) => (
                    <li key={advert._id} className="">
                        <AdvertItem props={advert} />
                    </li>
                ))}
            </ul>
            {displayedAdverts.length < visibleAdverts.length && (
                <button className={css.load_more} type="button" onClick={handleLoadMore}>
                    Load more
                </button>
            )}
        </div>
    );
};

export default AdvertsList;
