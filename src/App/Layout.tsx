// import { IMAGES } from "@/assets/images";
import { Header } from "@/components/Header";
import { ReactNode } from "react";
// import { HeroSection } from "@/components/HeroSection";
// import SideBar from "@/components/SideBar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen w-screen">
      <Header />
      {/* <HeroSection bgSrc={IMAGES.bgImage}> */}
        <div className="flex w-full">
          {/* <SideBar/> */}
          <div className="w-full h-full">{children}</div>
        </div>
      {/* </HeroSection> */}
    </div>
  );
};

export default Layout;
