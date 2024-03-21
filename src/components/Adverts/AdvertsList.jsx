import { useDispatch, useSelector } from "react-redux";
import { selectGetAdverts } from "store/selectors";
import { useEffect, useState } from "react";
import { fetchAdverts } from "store/operations";
import AdvertItem from "components/AdvertItem/AdvertItem";

const AdvertsList = () => {
    const dispatch = useDispatch();
    const adverts = useSelector(selectGetAdverts);
    const [displayedAdverts, setDisplayedAdverts] = useState([]);
    const advertsPerPage = 4;

    useEffect(() => {
        dispatch(fetchAdverts());
    }, [dispatch]);

    useEffect(() => {
        if (adverts.length > 0) {
            setDisplayedAdverts(adverts.slice(0, advertsPerPage));
        }
    }, [adverts]);

    const handleLoadMore = () => {
        const nextPage = Math.ceil(displayedAdverts.length / advertsPerPage) + 1;
        const startIndex = (nextPage - 1) * advertsPerPage;
        const endIndex = Math.min(startIndex + advertsPerPage, adverts.length);

        setDisplayedAdverts(prevAdverts => [
            ...prevAdverts,
            ...adverts.slice(startIndex, endIndex)
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
            {displayedAdverts.length < adverts.length && (
                <button type="button" className="" onClick={handleLoadMore}>
                    Load more
                </button>
            )}
        </div>
    );
};

export default AdvertsList;
