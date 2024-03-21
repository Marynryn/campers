import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar';


export const Layout = () => {
    return (
        <div className="" style={{
            height: '100vh',
            display: 'block',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            color: '#010101'
        }}>
            <AppBar />
            <Outlet />

            {/* <Toaster position="top-right" reverseOrder={false} /> */}
        </div>
    );
};