import styles from "../../styles/Coupon.module.css";

export default function Coupon() {
  return (
    <section className={styles.container}>
      <h3>Ưu đãi độc quyền</h3>
      <p>Chỉ có tại Luxstay, hấp dẫn và hữu hạn, book ngay!</p>
      <div className={styles.images}>
        <div className={styles.image}>
          <img
            src="https://cdn.luxstay.com/home/event/event_1_1627881441.jpg"
            alt=""
          />
        </div>
        <div className={styles.image}>
          <img
            src="https://cdn.luxstay.com/home/event/event_1_1614658965.jpg"
            alt=""
          />
        </div>
        <div className={styles.image}>
          <img
            src="https://cdn.luxstay.com/home/event/event_1_1596604498.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
