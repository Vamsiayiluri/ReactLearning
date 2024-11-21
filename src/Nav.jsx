import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Link to="/ ">Home Page</Link>
      <Link to="/dashboard "> Dashboard page</Link>
      <Link to="/blog"> Blog page</Link>
    </div>
  );
}
