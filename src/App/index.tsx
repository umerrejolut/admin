import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from 'react-router-dom';
import Home from '../Pages/Home';
import { useTranslation } from 'react-i18next';
import SignupPage from '@/Pages/Auth/Signup';

const App = () => {
  const { t } = useTranslation();
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="h-screen bg-background text-primary">
              <h1 className="flex justify-center text-6xl">{t('title')}</h1>
              <Outlet />
            </div>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<SignupPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
