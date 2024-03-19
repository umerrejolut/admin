
interface SidebarMenuProps {
    name?: string;
    // activeIndex?: number;
    // index?: number;
    // onClick?: void;
}

export default function SidebarMenu({name}: SidebarMenuProps){
    return (
        <div>
            <div className="flex items-center pt-5">
                {/* {activeIndex === index ? (
                    <div className="h-[21px] w-[2px] mr-3 bg-secondary"/>
                ) : (
                    <div className="w-3"/>
                )} */}
                <div className="h-[21px] w-[2px] mr-3 bg-secondary"/>
                <p className="h-[21px] pl-5 text-primary cursor-pointer hover:text-secondary">
                    {name}
                </p>
            </div>
        </div>
    )
}