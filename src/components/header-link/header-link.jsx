import styles from './header-link.module.css';

const HeaderLink = ({ children, text, isActive }) => {
  return (
    <a href="/#" className={`${styles.header__link}`}>
      {children}
      <span className={`${!isActive && 'text_color_inactive'}`}>{text}</span>
    </a>
  );
};

export default HeaderLink;
