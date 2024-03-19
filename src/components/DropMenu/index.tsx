

interface Action {
    action: string;
    key: string;
  }
interface DropMenuProps {
    actions: Action[];
    toggleMenu: (key: string) => void;
  }

function DropMenu({actions, toggleMenu}: DropMenuProps) {
  return (
    <div className="absolute bg-[#181818] rounded-lg  text-text-primary p-3 w-[200px] mt-3 z-30 bg-blur right-0">
        {actions.map(({action, key}, index) => (
            <p 
                key={index} 
                className="border-b-[0.75px] border-b-lightprimary py-2 hover:cursor-pointer"
                onClick={(e) => {
                    e.stopPropagation();
                    toggleMenu(key);
                }}
            >
                {action}
            </p>
        ) )}
    </div>
  )
}

export default DropMenu;