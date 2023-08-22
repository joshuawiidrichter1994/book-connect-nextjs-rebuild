import Button from "../ui/button";
import classes from "./book-item.module.css";
import ArrowRightIcon from "../icons/arrow-right-icon";
import Image from "next/image";
import styles from "./book-item.module.css";


function BookItem(props) {
  const { id, genres,popularity, title, image, description, pages, published, author } = props;


  const exploreLink = `/previewModelOpen/${id}`;
  return (
    <li className={classes.item}>
 <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
          </div>
          <div className={classes.address}>
          </div>
        </div>
        <div className={classes.actions}>

        </div>
      </div>
    </li>
  );
}

export default BookItem;
