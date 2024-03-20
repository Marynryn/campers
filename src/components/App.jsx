import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

// const WelcomePage = lazy(() => import('pages/WelcomePage'));


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/catalog"
            element={<Catalog />} />
          <Route
            path="/login"
            element={<Favorites />} />

        </Route>
      </Routes>
    </div>
  );
};
