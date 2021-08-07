import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from "../../styles/Location.module.css";
import Link from "next/link";
import ScrollContainer from "react-indiana-drag-scroll";
import Image from "next/image";

export default function Carousels() {
  return (
    <section className={styles.container}>
      <h3>Địa điểm nổi bật</h3>
      <p>Cùng Luxstay bắt đầu chuyến hành trình chinh phục thế giới của bạn</p>
      <ScrollContainer className={styles.images} horizontal={true}>
        <div className={styles.image}>
          <Link href="/location/hanoi">
            <img
              src="https://cdn.luxstay.com/home/location/location_1_1559734709.png"
              alt=""
            />
          </Link>

          <div className={styles.image__text}>
            <h4>Hà Nội</h4>
            <span>2883 Chỗ ở</span>
          </div>
        </div>
        <div className={styles.image}>
          <Link href="/location/saigon">
            <img
              src="https://cdn.luxstay.com/home/location/location_5_1559735011.png"
              alt=""
            />
          </Link>

          <div className={styles.image__text}>
            <h4>TP.Hồ Chí Minh</h4>
            <span>2297 Chỗ ở</span>
          </div>
        </div>
        <div className={styles.image}>
          <Link href="/location/vungtau">
            <img
              src="https://cdn.luxstay.com/home/location/location_10_1559303118.png"
              alt=""
            />
          </Link>

          <div className={styles.image__text}>
            <h4>Vũng Tàu</h4>
            <span>534 Chỗ ở</span>
          </div>
        </div>
        <div className={styles.image}>
          <Link href="/location/dalat">
            <img
              src="https://cdn.luxstay.com/home/location/location_4_1559786177.png"
              alt=""
            />
          </Link>

          <div className={styles.image__text}>
            <h4>Đà Lạt</h4>
            <span>1472 Chỗ ở</span>
          </div>
        </div>
        <div className={styles.image}>
          <Link href="/location/danang">
            <img
              src="https://cdn.luxstay.com/home/location/location_16_1559303173.png"
              alt=""
            />
          </Link>

          <div className={styles.image__text}>
            <h4>Đà Nẵng</h4>
            <span>903 Chỗ ở</span>
          </div>
        </div>
        <div className={styles.image}>
          <Link href="/location/nhatrang">
            <img
              src="https://cdn.luxstay.com/home/location/location_1_1559373089.png"
              alt=""
            />
          </Link>

          <div className={styles.image__text}>
            <h4>Nha Trang</h4>
            <span>629 Chỗ ở</span>
          </div>
        </div>
      </ScrollContainer>
    </section>
  );
}
