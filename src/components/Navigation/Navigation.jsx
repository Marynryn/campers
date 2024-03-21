import { NavLink } from 'react-router-dom';



export const Navigation = () => {


    return (
        <nav>
            <NavLink className="" to="/">
                Home
            </NavLink>

            <NavLink className="" to="/catalog">
                Catalog
            </NavLink>
            <NavLink className="" to="/favorites">
                Favorites
            </NavLink>
        </nav>
    );
};