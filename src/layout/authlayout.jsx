import { Outlet } from "react-router-dom";
import { Sidebar } from "../components";
import { Layout } from "../components";
const Authlayout = () => {
  // const loading = useSelector((state) => state.auth.isLoading);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getUser())
  //     .unwrap()
  //     .then(() => {})
  //     .catch((err) => {
  //       toast.error(err.message);
  //     });
  // }, []);
  return (
    <Sidebar>
      <Layout>
        <Outlet />
      </Layout>
    </Sidebar>
  );
};

export default Authlayout;
