import styles from "./404.module.css";

function NotFound() {
  return (
    <section className={styles.wrapper}>
      <h1>404 Not Found</h1>
      <p>This page does not exist. Please check the URL and try again.</p>
    </section>
  );
}

export default NotFound;
