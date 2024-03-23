import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar';
import css from "./Layout.module.css"

export const Layout = () => {
    return (
        <div className={css.layout} >
            <AppBar />
            <Outlet />

            {/* <Toaster position="top-right" reverseOrder={false} /> */}
        </div>
    );
};