import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerLinks}>
      <div className={styles.guideLinks}>
        <a href="https://www.youtube.com/about/">About</a>
        <a href="https://www.youtube.com/about/press/">Press</a>
        <a href="https://www.youtube.com/about/copyright/">Copyright</a>
        <a href="/t/contact_us/">Contact us</a>
        <a href="https://www.youtube.com/creators/">Creators</a>
        <a href="https://www.youtube.com/ads/">Advertise</a>
        <a href="https://developers.google.com/youtube">Developers</a>
      </div>
      <div className={styles.guideLinks}>
        <a href="/t/terms">Terms</a>
        <a href="/t/privacy">Privacy</a>
        <a href="https://www.youtube.com/about/policies/">
          Policy &amp; Safety
        </a>
        <a href="https://www.youtube.com/howyoutubeworks?utm_campaign=ytgen&amp;utm_source=ythp&amp;utm_medium=LeftNav&amp;utm_content=txt&amp;u=https%3A%2F%2Fwww.youtube.com%2Fhowyoutubeworks%3Futm_source%3Dythp%26utm_medium%3DLeftNav%26utm_campaign%3Dytgen">
          How YouTube works
        </a>
        <a href="/new">Test new features</a>
      </div>
      <div className={styles.copyright}>
        <div>© 2023 Youtube LLC</div>
      </div>
    </div>
  );
};

export default Footer;
