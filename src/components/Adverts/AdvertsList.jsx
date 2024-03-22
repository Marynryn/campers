import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdverts } from "store/operations";
import { selectVisibleAdverts } from "store/selectors"; // Импортируем селектор для отфильтрованных объявлений
import AdvertItem from "components/AdvertItem/AdvertItem";

const AdvertsList = () => {
    const dispatch = useDispatch();
    const visibleAdverts = useSelector(selectVisibleAdverts);
    console.log(visibleAdverts)// Используем селектор для отфильтрованных объявлений
    const [displayedAdverts, setDisplayedAdverts] = useState([]); // Состояние для отображаемых объявлений
    const advertsPerPage = 4;

    useEffect(() => {
        dispatch(fetchAdverts());
    }, [dispatch]);

    useEffect(() => {
        // Отображаем только первую страницу отфильтрованных объявлений
        setDisplayedAdverts(visibleAdverts.slice(0, advertsPerPage));
    }, [visibleAdverts, advertsPerPage]);

    const handleLoadMore = () => {
        // Получаем следующую страницу отфильтрованных объявлений
        const nextPage = Math.ceil(displayedAdverts.length / advertsPerPage) + 1;
        const startIndex = (nextPage - 1) * advertsPerPage;
        const endIndex = Math.min(startIndex + advertsPerPage, visibleAdverts.length);

        setDisplayedAdverts(prevAdverts => [
            ...prevAdverts,
            ...visibleAdverts.slice(startIndex, endIndex)
        ]);
    };

    return (
        <div>
            <ul>
                {displayedAdverts.map((advert) => (
                    <li key={advert._id} className="">
                        <AdvertItem props={advert} />
                    </li>
                ))}
            </ul>
            {displayedAdverts.length < visibleAdverts.length && (
                <button type="button" onClick={handleLoadMore}>
                    Load more
                </button>
            )}
        </div>
    );
};

export default AdvertsList;
