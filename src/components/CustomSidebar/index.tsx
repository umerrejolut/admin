import { IMAGES } from "@/assets/images";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import {
//   ColoredUpArrowSvgIcon,
//   DownArrowSvgIcon,
//   SidebarLogoSvgIcon,
// } from "../../assets/svgimages";
// import cookieStorage from "../../services/cookie-storage";
interface Route {
  id: number;
  path: string;
  label: string;
  icon: JSX.Element; // Assuming icon is a React element
  allowedRoles: string[];
  subItems?: Route[];
}

interface SidebarProps {
  items: Route[];
}

const Sidebar:React.FC<SidebarProps> = ({ items }: SidebarProps) => {

  const location = useLocation();
  // const customLinearGradientSubmenu =
  //   " linear-gradient(180deg, #F5EEE1 0%, #CEB5AA 82.27%, #6A221D 166%)";

  const [expandedSubmenu, setExpandedSubmenu] = useState<number | null>(null);

  const handleSubmenuClick = (index: number) => {
    if (index === expandedSubmenu) {
      setExpandedSubmenu(null);
    } else {
      setExpandedSubmenu(index);
    }
  };
//   const token = cookieStorage.getCookie("accessToken");
//   const role = token
//     ? JSON.parse(cookieStorage.getCookie("payload"))?.role
//     : "Un authorized";

console.log("items:::::::::::", items)
  return (
    <div className="flex flex-col min-h-scree shadow-md w-64 bg-blur bg-background">
      <div className="mb-8">
        <button
        //   onClick={() =>
        //     role === "SUPER_ADMIN"
        //       ? navigate("/dashboard/manage-organization")
        //       : role === "ORG_ADMIN"
        //       ? navigate("/dashboard/manage-estate")
        //       : role === "ESTATE_ADMIN"
        //       ? navigate("/dashboard/manage-users")
        //       : "unAuthorize"
        //   }
          className="w-full px-4"
        >
          <div className="border-b-[0.4px] border-bottomline flex flex-row items-center justify-center py-4">
            <div>
              <img src={IMAGES.AstraLogo} alt="Astra Logo" />
            </div>
            {/* <p className="text-bgColor text-lg font-bold ml-2 align-middle mb-0">
              ASTRANOVA
            </p> */}
          </div>
        </button>

        <ul className="my-5 bg-red-100">
          {items && items.length > 0 && items.map((item: Route, index: number) => (
            
            <li
            key={item.id}
            className={`flex flex-col 
            ${
              expandedSubmenu === index
              ? `menuGradient`
              : location.pathname.includes(item?.path)
              ? `menuGradient`
              : "bg-transparent"
            } hover:bg-hoverColor
            `}
            >
              <div
                className="flex flex-row py-3 align-middle items-center gap-14 "
                onClick={() => item.subItems && handleSubmenuClick(index)}
              >
                <Link to={item?.path === "/settings" ? "#" : item?.path}>
                  <div
                    className={`px-5 flex flex-row items-center ${
                      location.pathname.includes(item?.path) ||
                      expandedSubmenu === index
                        ? "text-sideBarBg font-medium text-base"
                        : "text-textColor font-normal text-base"
                    }`}
                  >
                    <div className="mx-3 w-4">{item.icon}</div>
                    <p
                      className={`${
                        location.pathname.includes(item?.path) ||
                        expandedSubmenu === index
                          ? "text-sideBarBg font-medium text-base "
                          : "text-textColor font-normal text-base"
                      }`}
                    >
                      {item.label}
                    </p>
                  </div>
                </Link>
                {/* {item.subItems && (
                  <div>
                    {expandedSubmenu === index ? (
                      <ColoredUpArrowSvgIcon />
                    ) : (
                      <DownArrowSvgIcon />
                    )}
                  </div>
                )} */}
              </div>
              {/* {item.subItems && expandedSubmenu === index && (
                <div
                  className="submenu-section"
                  style={{
                    background: `var(--cta-linear, ${customLinearGradientSubmenu})`,
                  }}
                >
                  <ul>
                    {item.subItems.map((subItem: any) => (
                      <li
                        key={subItem.id}
                        className="flex flex-row py-3 align-middle items-center gap-2"
                        style={{
                          background:
                            location.pathname === subItem?.path
                              ? `var(--cta-linear, ${customLinearGradientSubmenu})`
                              : "transparent",
                        }}
                      >
                        <Link
                          to={!subItem.renderFunction && subItem?.path}
                          onClick={() =>
                            subItem.renderFunction && subItem.renderFunction()
                          }
                        >
                          <div className="px-7">
                            <p
                              className={` ${
                                location.pathname === subItem?.path ||
                                subItem.id === 87
                                  ? "text-sideBarBg font-medium text-base "
                                  : "text-labelColor font-normal text-base hover:text-buttonBg hover:font-semibold"
                              }`}
                            >
                              {subItem.label}
                            </p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )} */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
