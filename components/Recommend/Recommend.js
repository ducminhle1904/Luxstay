import styles from "../../styles/Recommend.module.css";
import ScrollContainer from "react-indiana-drag-scroll";
import Link from "next/link";

export default function Recommend() {
  return (
    <section className={styles.container}>
      <h3>Gợi ý từ Luxstay</h3>
      <p>Những địa điểm thường đến mà Luxstay gợi ý dành cho bạn</p>
      <ScrollContainer className={styles.images} horizontal={true}>
        <div className={styles.wrapper}>
          <div className={styles.image}>
            <Link href="/">
              <img
                src="https://cdn.luxstay.com/home/apartment/apartment_1_1625465608.jpg"
                alt=""
              />
            </Link>
          </div>
          <div className={styles.content}>
            <h4>VI VU NGOẠI THÀNH HÀ NỘI</h4>
            <p>
              Trải nghiệm không gian thoáng đãng cho chuyến đi ngay gần Hà Nội
            </p>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.image}>
            <Link href="/">
              <img
                src="https://cdn.luxstay.com/home/apartment/apartment_2_1614588617.jpg"
                alt=""
              />
            </Link>
          </div>
          <div className={styles.content}>
            <h4>VŨNG TÀU BIỆT THỰ HỒ BƠI</h4>
            <p>
              Những căn biệt thự có hồ bơi dành cho kỳ nghỉ của bạn tại Vũng Tàu
            </p>
          </div>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.image}>
            <Link href="/">
              <img
                src="https://cdn.luxstay.com/home/apartment/apartment_1_1614660728.jpg"
                alt=""
              />
            </Link>
          </div>
          <div className={styles.content}>
            <h4>HÀ NỘI NỘI THÀNH LÃNG MẠN</h4>
            <p>Không gian lãng mạn dành cho cặp đôi tại trung tâm Hà Nội</p>
          </div>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.image}>
            <Link href="/">
              <img
                src="https://cdn.luxstay.com/home/apartment/apartment_2_1615794965.jpg"
                alt=""
              />
            </Link>
          </div>
          <div className={styles.content}>
            <h4>SÀI GÒN CẦN LÀ CÓ NGAY</h4>
            <p>
              Những căn homestay có 01 phòng ngủ tại Sài Gòn có thể đặt nhanh
              chóng
            </p>
          </div>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.image}>
            <Link href="/">
              <img
                src="https://cdn.luxstay.com/home/apartment/apartment_1_1584606781.jpg"
                alt=""
              />
            </Link>
          </div>
          <div className={styles.content}>
            <h4>BỂ BƠI VÀ BBQ</h4>
            <p>
              Trải nghiệm đẳng cấp tại những căn homestay có bể bơi đẹp và khu
              vực BBQ ấm cúng.
            </p>
          </div>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.image}>
            <Link href="/">
              <img
                src="https://cdn.luxstay.com/home/apartment/apartment_2_1584606872.jpg"
                alt=""
              />
            </Link>
          </div>
          <div className={styles.content}>
            <h4>SIÊU GIẢM GIÁ!</h4>
            <p>
              Top chỗ ở giảm giá đến 50% từ các chủ nhà thân thiện trên Luxstay.
            </p>
          </div>
        </div>
      </ScrollContainer>
    </section>
  );
}
