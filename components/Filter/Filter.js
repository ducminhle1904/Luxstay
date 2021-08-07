import styles from "../../styles/Filter.module.css";

export default function Filter() {
  return (
    <div className={styles.container}>
      <div className={styles.filter__item}>Khu vực</div>
      <div className={styles.filter__item}>Loại phòng</div>
      <div className={styles.filter__item}>Giá chỗ ở</div>
    </div>
  );
}
