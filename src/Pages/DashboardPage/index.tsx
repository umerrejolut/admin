import { ReactNode } from "react";
import Sidebar from "../../components/CustomSidebar";
import { useLocation } from "react-router-dom";
// import LogoutModal from "../../components/CustomLogoutModal";
// import { useTranslation } from "react-i18next";
// import cookieStorage from "../../services/cookie-storage";
// import ChangePassModal from "../../components/CustomChangePasswordModal";
import { ManageEstateSvgIcon } from "@/assets/svg";
import { Header } from "@/components/Header";

function DashboardLayout({ children }: { children: ReactNode }) {
  const location = useLocation();
//   const role = JSON.parse(cookieStorage.getCookie("payload"))?.role;
  // const { t } = useTranslation();

  // const [isChnagePassModalOpen, setIsChangePassModalOpen] = useState(false);

  // function openChangePassModal() {
  //   setIsChangePassModalOpen(true);
  // }

  // function closeChangePassModal() {
  //   setIsChangePassModalOpen(false);
  // }
  const routes = [
    {
      id: 1,
      path: "/dashboard/manage-airdrops",
      label: "Manage Airdrops",
      icon: (
        <ManageEstateSvgIcon
          color={
            location.pathname.includes("/dashboard/manage-airdrops")
              ? "#421317"
              : "#F7EEE0"
          }
        />
      ),
      allowedRoles: ["ORG_ADMIN"],
    },
  ];
  // const filteredRoutes = routes.filter(() => {
  //   // return route.allowedRoles.includes(role);
  // });

  return (
    <div className=" flex min-w-full min-h-full">
      <Sidebar items={routes} />
      <div className="content flex-1 ">
        <Header/>
        {children}
      </div>
      {/* <LogoutModal isOpen={isLogoutModalOpen} closeModal={closeLogoutModal} /> */}
      {/* <ChangePassModal
        isOpen={isChnagePassModalOpen}
        closeModal={closeChangePassModal}
      /> */}
    </div>
  );
}

export default DashboardLayout;
