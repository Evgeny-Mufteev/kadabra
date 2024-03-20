import { Link, useLocation } from 'react-router-dom';
import { AppRoute } from '../../../const/const';

export const Header = (): JSX.Element => {
  const location = useLocation();

  const isMainPage = location.pathname === '/';

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          {isMainPage ? (
            <span>Главная</span>
          ) : (
            <Link to={AppRoute.Main}>Главная</Link>
          )}
        </div>
      </div>
    </header>
  );
};
