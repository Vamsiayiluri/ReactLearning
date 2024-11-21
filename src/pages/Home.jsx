import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  function handleClick() {
    navigate("/dashboard/profile", { state: { userName } });
  }
  return (
    <div>
      This is a home page
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      ></input>
      <button onClick={() => handleClick()}>Navigate to profile page</button>
    </div>
  );
}
