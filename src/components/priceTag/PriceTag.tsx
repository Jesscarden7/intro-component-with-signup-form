import styles from "./PriceTag.module.css";

function PriceTag() {
  return (
    <div className={styles.priceTag}>
      <span>Try it free 7 days</span>
      <span> then $20/mo. thereafter</span>
    </div>
  );
}

export default PriceTag;
