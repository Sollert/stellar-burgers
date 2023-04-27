import styles from './app-header.module.css';
import {
  Logo,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import HeaderLink from '../header-link/header-link';
import HeaderNavigation from '../header-navigation/header-navigation';

const AppHeader = () => {
  return (
    <header className={`${styles.header} text text_type_main-default mb-10`}>
      <div className={styles.content}>
        <HeaderNavigation />
        <Logo />
        <div className={`${styles.profile} pt-4 pb-4 pl-5 pr-5`}>
          <HeaderLink isActive={false} text={'Личный кабинет'}>
            <ProfileIcon type={'secondary'} />
          </HeaderLink>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
