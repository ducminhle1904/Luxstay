import { urlFor } from "../../sanity";
import classes from "../../styles/Image.module.css";

const Image = ({ image }) => {
  return (
    <div className={classes.image}>
      <img src={urlFor(image).auto("format")} alt="" />
    </div>
  );
};

export default Image;
