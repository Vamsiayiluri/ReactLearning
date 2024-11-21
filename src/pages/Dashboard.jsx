import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <ul>
        <li>
          {" "}
          <Link to="profile" state={{ userName: "vamsi" }}>
            Profile
          </Link>
        </li>
        <li>
          <Link to="settings">Settings </Link>
        </li>
      </ul>
      This is a Dashboard page
      <Outlet></Outlet>
    </div>
  );
}
