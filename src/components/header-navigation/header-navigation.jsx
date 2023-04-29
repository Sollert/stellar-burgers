import styles from './header-navigation.module.css';
import HeaderLink from '../header-link/header-link';
import {
  BurgerIcon,
  ListIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

const HeaderNavigation = () => {
  return (
    <nav className={styles.header__navigation}>
      <ul className={styles.header__list}>
        <li className={'pt-4 pb-4 pl-5 pr-5'}>
          <HeaderLink isActive={true} text={'Конструктор'}>
            <BurgerIcon type={'primary'} />
          </HeaderLink>
        </li>
        <li className={'pt-4 pb-4 pl-5 pr-5'}>
          <HeaderLink isActive={false} text={'Лента заказов'}>
            <ListIcon type={'secondary'} />
          </HeaderLink>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
