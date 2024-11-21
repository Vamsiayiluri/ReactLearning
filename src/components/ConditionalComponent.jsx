export default function ConditionalComponent({ person }) {
  const check = true;
  const ternary = false;
  let message;
  if (ternary) {
    return check ? (
      <div>
        <h3>Hello check success</h3>
      </div>
    ) : (
      <div>
        <h3>Hello check failed</h3>
      </div>
    );
  } else {
    if (check) {
      message = (
        <div>
          <h3>Hello check success</h3>
        </div>
      );
    } else {
      message = (
        <div>
          <h3>Hello check failed</h3>
        </div>
      );
    }
    return message;
  }
}
