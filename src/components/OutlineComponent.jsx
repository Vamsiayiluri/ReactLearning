import "../css/style.css";
import styles from "./outlineComponent.module.css";

const header = { color: "orange", fontSize: "120px" };
export default function OutlineComponent() {
  return (
    <div>
      <h1 style={header}>Hello user</h1>
      <h2 className="headers"> Checking</h2>
      <h3 className={styles.heading}> Welcome   </h3>
    </div>
  );
}
