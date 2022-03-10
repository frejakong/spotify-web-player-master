import { Link } from "react-router-dom";
import * as React from "react";
import styles from './Logo.module.css';

function SvgLogo(props) {
  return (
    <Link className={styles.link} to="/">
        <img src="https://img.icons8.com/color/48/000000/international-music.png"/>

    </Link>

  );
}

export default SvgLogo;
