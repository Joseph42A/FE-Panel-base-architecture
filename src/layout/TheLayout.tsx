import { Link, Outlet } from "react-router-dom";

const TheLayout = () => {
  return (
    <div>
      <section>Top</section>

      <Link to="dashboard">Go to dashboard</Link>

      <Outlet />
    </div>
  );
};

export default TheLayout;
