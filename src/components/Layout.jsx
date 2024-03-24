import { Outlet } from 'react-router-dom';

import { AppBar } from './AppBar/AppBar';
import css from "./Layout.module.css"

export const Layout = () => {
    return (
        <div className={css.layout} >
            <AppBar />
            <Outlet />


        </div>
    );
};