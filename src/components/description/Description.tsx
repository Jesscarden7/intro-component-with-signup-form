import styles from "./Description.module.css";

function Description() {
  return (
    <div className={styles.description}>
      <h1>Learn to code by</h1>
      <h1>watching others</h1>
      <p>
        See how experienced developers solve problems in real-time. <br />
        Watching scripted tutorials is great, but understanding how <br />
        developers think is invaluable.
      </p>
    </div>
  );
}

export default Description;
