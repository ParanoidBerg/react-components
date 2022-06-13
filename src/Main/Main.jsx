import styles from "./main.module.css";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.counter}>0</div>
      <div className={styles.btnCnt}>
        <button className={styles.bigger}>Увеличить</button>
        <button className={styles.lesser}>Уменьшить</button>
        <button className={styles.cancel}>Сбросить</button>
      </div>
    </div>
  );
};

export default Main;
