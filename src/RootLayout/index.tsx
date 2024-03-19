import Layout from "@/App/Layout";
import { Outlet } from "react-router-dom";


const RootLayout = () => {

  return (
    <>
        <Layout>
            {<Outlet />}
        </Layout>
    </>
  );
};

export default RootLayout;
