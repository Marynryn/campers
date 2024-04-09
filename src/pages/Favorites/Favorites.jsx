import AdvertItem from "components/AdvertItem/AdvertItem";
import { useEffect, useState } from "react";

const Favorites = () => {
    const [favoriteAdverts, setFavoriteAdverts] = useState([]);

    useEffect(() => {
        const handleStorageChange = () => {
            const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

            setFavoriteAdverts(storedFavorites.reverse());
        };

        window.addEventListener("storage", handleStorageChange);
        handleStorageChange();

        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);

    return (
        <div>
            <h2>Favorite Adverts</h2>
            <ul>
                {favoriteAdverts.map((item) => (
                    <li key={item._id}>
                        <AdvertItem props={item} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Favorites;
