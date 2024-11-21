import "../css/style.css";
import styles from "./inlineComponent.module.css";

const header = { color: "blue", fontSize: "120px" };
export default function InlineComponent() {
  return (
    <div>
      <h1 style={header}>Hello user</h1>
      <h2 className="headers"> Checking</h2>
      <h3 className={styles.heading}>Hi</h3>
    </div>
  );
}
