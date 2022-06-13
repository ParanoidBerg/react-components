import styles from "./header.module.css";
import logo from "../assets/Group1.svg";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.imgCnt}>
        <img alt="logo" className={styles.logo} src={logo} />
      </div>
      <div className={styles.text}>
        <div>Главная</div>
        <div className={styles.aboutUs}>О нас</div>
        <div>Контакты</div>
      </div>
      <hr className={styles.line} />
    </div>
  );
};

export default Header;
