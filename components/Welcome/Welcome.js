import styles from "../../styles/Welcome.module.css";

export default function Welcome() {
  return (
    <section className={styles.container}>
      <h3>Chào mừng đến với Luxstay!</h3>
      <p>
        Đặt chỗ ở, homestay, cho thuê xe, trải nghiệm và nhiều hơn nữa trên
        Luxstay
      </p>
      <p>
        <a href="#">Đăng nhập</a> hoặc <a href="#">Đăng ký</a> để trải nghiệm
      </p>
    </section>
  );
}
