import { IMAGES } from "@/assets/images";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import DropMenu from "../DropMenu";
import { useNavigate } from "react-router-dom";
import { logoutRedux } from "@/store";


export const Header = () => {
    const [openPopup ,setOpenPopup] = useState(false);
    const { t } = useTranslation();
    const navigation = useNavigate(); 

    const handleOpenPopup = async () => {
        setOpenPopup(!openPopup);
    };

    const handlefunctions = async(key: string) => {
        handleOpenPopup();
        switch (key) {
            case "profile":
                navigation('profile');
                break;

            case "logout":
                logoutRedux();
                // navigation("/");
                window.location.href = "/";
                break
        
            default:
                break;
        }
    }

    return (
        // <div className="bg-background text-primary h-[72px] border-b-[0.75px] border-b-lightprimary bg-background-blackmain bg-blur">
        <div className="flex items-center justify-between px-5 py-3 bg-background text-primary h-[72px] border-b-[0.75px] border-b-lightprimary bg-background-blackmain bg-blur">
            {/* <img src={IMAGES.AstraLogo} alt="logo" className="h-11"/> */}
            <h1 className="flex justify-center font-bold text-center text-[18px]">{t('adminPanel')}</h1>

            <div className="relative">
            <div className="flex items-center gap-3 cursor-pointer"
                onClick={handleOpenPopup}
            >
                <div>
                    <img src={IMAGES.ProfileImage} alt="profile" className="w-[45px] h-[45px]"/>
                </div>
                <p className="group-hover:!text-text-secondary">hello Admin</p>
            </div>
            {openPopup && 
                <DropMenu
                actions={[
                    { key: "profile", action: "My Profile" },
                    { key: "logout", action: "Log Out" }
                    ]}
                    // toggleMenu={(item: string) => handleOpenPopup()}
                    toggleMenu={(item: string) => handlefunctions(item)}
                />
            }
            </div>
        </div>
        // </div>
    )
}