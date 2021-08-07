import styles from "../../styles/Instructions.module.css";
import ScrollContainer from "react-indiana-drag-scroll";

export default function Instruction() {
  return (
    <section className={styles.container}>
      <h3>Hướng dẫn sử dụng</h3>
      <p>Đặt chỗ nhanh, thanh toán đơn giản, sử dụng dễ dàng</p>
      <ScrollContainer className={styles.images}>
        <div className={styles.image}>
          <img
            src="https://cdn.luxstay.com/home/theme/theme_3_1583838065.jpg"
            alt=""
          />
        </div>
        <div className={styles.image}>
          <img
            src="https://cdn.luxstay.com/home/theme/theme_4_1583838088.jpg"
            alt=""
          />
        </div>
        <div className={styles.image}>
          <img
            src="https://cdn.luxstay.com/home/theme/theme_10_1583894021.jpg"
            alt=""
          />
        </div>
        <div className={styles.image}>
          <img
            src="https://cdn.luxstay.com/home/theme/theme_2_1583837926.jpg"
            alt=""
          />
        </div>
        <div className={styles.image}>
          <img
            src="https://cdn.luxstay.com/home/theme/theme_1_1584074526.jpg"
            alt=""
          />
        </div>
      </ScrollContainer>
    </section>
  );
}
