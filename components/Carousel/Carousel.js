import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styles from "../../styles/Carousels.module.css";

export default function Carousels() {
  return (
    <section className={styles.container}>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        emulateTouch={true}
        showStatus={false}
        dynamicHeight={true}
      >
        <div>
          <img src="https://beta-api.luxstay.net/api/upload/file?storage=admins/12/qF7ukmI--Rwr2H5LwzVZwcXa.jpg" />
        </div>
        <div>
          <img src="https://beta-api.luxstay.net/api/upload/file?storage=admins/12/90D5fOM9lCriVigTdM4ZxXjm.jpg" />
        </div>
      </Carousel>
    </section>
  );
}
