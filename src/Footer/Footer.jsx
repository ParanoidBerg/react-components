import styles from "./footer.module.css";
import logo from "../assets/Group6-1.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <img alt="logo2" className={styles.logo2} src={logo} />

      <div className={styles.part}>Партнерам</div>
      <div className={styles.forIng}>Разработчикам</div>
      <div className={styles.jobs}>Вакансии</div>
      <div className={styles.rights}>ООО "Интукод" 2020г.</div>
    </div>
  );
};

export default Footer;
