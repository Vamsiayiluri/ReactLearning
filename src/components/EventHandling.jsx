export default function EventHandling() {
  const getMessage = () => {
    console.log("Hello from Cognine");
  };
  //   function getMessage() {
  //     console.log("Hello from Cognine");
  //   }
  return (
    <div>
      <button onClick={getMessage}>Click to see message</button>
    </div>
  );
}
