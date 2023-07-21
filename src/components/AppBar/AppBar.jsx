import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import css from './AppBar.module.css';

export default function AppBar() {
  const isLogIn = useSelector(state => state.user.isLogIn);
  return (
    <header className={css.header}>
      <Navigation />
      {isLogIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
