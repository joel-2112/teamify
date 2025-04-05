import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import ContactsPage from './pages/ContactsPage';
import AboutPage from './pages/AboutsPage';
import SubscriptionPlan from './pages/SubscriptionPlan';

const appRoutes = [
  { path: '/', element: <HomePage />, exact: true },
  { path: '/features', element: <FeaturesPage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/contact', element: <ContactsPage /> }
];

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
   <Route path="/subscription-plan" element={<SubscriptionPlan />}/>
   <Route path="/login" element={<SubscriptionPlan />}/>
        {/* Define the main layout route */}
        <Route element={<Layout />}>
          {appRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
              exact={route.exact}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;