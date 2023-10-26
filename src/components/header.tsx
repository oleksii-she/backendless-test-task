import { useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <ul className="nav__list">
            <li>
              <a
                className={
                  location.pathname === '/dummyTable'
                    ? 'nav__list-link active-link'
                    : 'nav__list-link'
                }
                href="/dummyTable"
              >
                dummyTable
              </a>
            </li>
            <li>
              <a
                className={
                  location.pathname === '/dummyChart'
                    ? 'nav__list-link active-link'
                    : 'nav__list-link'
                }
                href="/dummyChart"
              >
                dummyChart
              </a>
            </li>
            <li>
              <a
                className={
                  location.pathname === '/dummyList'
                    ? 'nav__list-link active-link'
                    : 'nav__list-link'
                }
                href="/dummyList"
              >
                dummyList
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
