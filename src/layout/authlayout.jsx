import { Outlet } from "react-router-dom";
import { Sidebar } from "../components";
import { Layout } from "../components";
const Authlayout = () => {
  return (
    <Sidebar>
      <Layout>
        <Outlet />
      </Layout>
    </Sidebar>
  );
};

export default Authlayout;
