import styles from './Options.module.css'


const Options = ({ updateFeedback, resetFeedback, reset }) => {
  return (
    <div className={styles.but}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {reset && <button onClick={resetFeedback}>Reset</button>}
    </div>
  );
};
export default Options;