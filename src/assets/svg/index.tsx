import { useState } from "react";

export const EmailIcon = () => {
  return (
    <svg
      width="21"
      height="22"
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.50024 4H17.5002C18.4627 4 19.2502 4.7875 19.2502 5.75V16.25C19.2502 17.2125 18.4627 18 17.5002 18H3.50024C2.53774 18 1.75024 17.2125 1.75024 16.25V5.75C1.75024 4.7875 2.53774 4 3.50024 4Z"
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.2502 5.75L10.5002 11.875L1.75024 5.75"
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ChatIcon = ({ active }: { active: boolean }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.3125 18.8719L4.22812 21.4594C4.11886 21.5498 3.9862 21.6074 3.84553 21.6254C3.70486 21.6435 3.56195 21.6213 3.43338 21.5615C3.30481 21.5016 3.19585 21.4065 3.11914 21.2872C3.04244 21.1679 3.00112 21.0293 3 20.8875V6C3 5.80109 3.07902 5.61032 3.21967 5.46967C3.36032 5.32902 3.55109 5.25 3.75 5.25H20.25C20.4489 5.25 20.6397 5.32902 20.7803 5.46967C20.921 5.61032 21 5.80109 21 6V18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H7.65937L7.3125 18.8719Z"
        stroke={active ? '#00A885' : 'white'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 10.5H15"
        stroke={active ? '#00A885' : 'white'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 13.5H15"
        stroke={active ? '#00A885' : 'white'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const VaultIcon = ({ active }: { active: boolean }) => {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28 28.75V31"
        stroke={active ? '#00A885' : 'white'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 28.75V31"
        stroke={active ? '#00A885' : 'white'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.25 14.5H13.75C13.3358 14.5 13 14.8358 13 15.25V28C13 28.4142 13.3358 28.75 13.75 28.75H30.25C30.6642 28.75 31 28.4142 31 28V15.25C31 14.8358 30.6642 14.5 30.25 14.5Z"
        stroke={active ? '#00A885' : 'white'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.25 23.5C25.0784 23.5 25.75 22.8284 25.75 22C25.75 21.1716 25.0784 20.5 24.25 20.5C23.4216 20.5 22.75 21.1716 22.75 22C22.75 22.8284 23.4216 23.5 24.25 23.5Z"
        fill={active ? '#00A885' : 'white'}
      />
      <path
        d="M24.25 22H31"
        stroke={active ? '#00A885' : 'white'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.25 25.75C26.3211 25.75 28 24.0711 28 22C28 19.9289 26.3211 18.25 24.25 18.25C22.1789 18.25 20.5 19.9289 20.5 22C20.5 24.0711 22.1789 25.75 24.25 25.75Z"
        stroke={active ? '#00A885' : 'white'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const SettingIcon = ({ active }: { active: boolean }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.675 14.6649L20.1398 13.3524C20.2125 12.9071 20.25 12.4524 20.25 11.9978C20.25 11.5431 20.2125 11.0884 20.1398 10.6431L21.675 9.33057C21.7908 9.23144 21.8737 9.09942 21.9126 8.95205C21.9515 8.80468 21.9447 8.64895 21.893 8.50557L21.8719 8.44463C21.4492 7.26344 20.8164 6.16846 20.0039 5.2126L19.9617 5.16338C19.8631 5.04749 19.7318 4.96418 19.5849 4.92443C19.4381 4.88468 19.2826 4.89036 19.1391 4.94072L17.2336 5.61807C16.5305 5.0415 15.7453 4.58682 14.8969 4.26807L14.5289 2.27588C14.5011 2.12598 14.4284 1.98807 14.3204 1.88048C14.2124 1.77289 14.0742 1.70071 13.9242 1.67354L13.8609 1.66182C12.6398 1.4415 11.3555 1.4415 10.1344 1.66182L10.0711 1.67354C9.92108 1.70071 9.78289 1.77289 9.67488 1.88048C9.56688 1.98807 9.49416 2.12598 9.4664 2.27588L9.09609 4.27744C8.25442 4.59626 7.47062 5.0507 6.77577 5.62275L4.85624 4.94072C4.71272 4.88996 4.55716 4.88408 4.41022 4.92385C4.26327 4.96362 4.13191 5.04716 4.03359 5.16338L3.9914 5.2126C3.17987 6.16914 2.54712 7.26393 2.12343 8.44463L2.10234 8.50557C1.99687 8.79853 2.08359 9.12666 2.32031 9.33057L3.87421 10.6571C3.80156 11.0978 3.7664 11.5478 3.7664 11.9954C3.7664 12.4454 3.80156 12.8954 3.87421 13.3337L2.32031 14.6603C2.20451 14.7594 2.12164 14.8914 2.0827 15.0388C2.04377 15.1861 2.05062 15.3419 2.10234 15.4853L2.12343 15.5462C2.54765 16.7274 3.17577 17.8173 3.9914 18.7782L4.03359 18.8274C4.13215 18.9433 4.26352 19.0266 4.41037 19.0664C4.55723 19.1061 4.71268 19.1005 4.85624 19.0501L6.77577 18.3681C7.47421 18.9423 8.25468 19.397 9.09609 19.7134L9.4664 21.7149C9.49416 21.8648 9.56688 22.0027 9.67488 22.1103C9.78289 22.2179 9.92108 22.2901 10.0711 22.3173L10.1344 22.329C11.3667 22.5505 12.6286 22.5505 13.8609 22.329L13.9242 22.3173C14.0742 22.2901 14.2124 22.2179 14.3204 22.1103C14.4284 22.0027 14.5011 21.8648 14.5289 21.7149L14.8969 19.7228C15.745 19.4048 16.5345 18.9487 17.2336 18.3728L19.1391 19.0501C19.2826 19.1009 19.4381 19.1067 19.5851 19.067C19.732 19.0272 19.8634 18.9437 19.9617 18.8274L20.0039 18.7782C20.8195 17.8149 21.4476 16.7274 21.8719 15.5462L21.893 15.4853C21.9984 15.197 21.9117 14.8688 21.675 14.6649ZM18.4758 10.9196C18.5344 11.2735 18.5648 11.6368 18.5648 12.0001C18.5648 12.3634 18.5344 12.7267 18.4758 13.0806L18.3211 14.0204L20.0719 15.5181C19.8065 16.1295 19.4714 16.7083 19.0734 17.2431L16.8984 16.472L16.1625 17.0767C15.6023 17.536 14.9789 17.897 14.3039 18.1501L13.4109 18.4853L12.9914 20.7587C12.3295 20.8337 11.6612 20.8337 10.9992 20.7587L10.5797 18.4806L9.69374 18.1407C9.02577 17.8876 8.40468 17.5267 7.84921 17.0696L7.11327 16.4626L4.92421 17.2407C4.52577 16.704 4.19296 16.1251 3.92577 15.5157L5.69531 14.004L5.54296 13.0665C5.48671 12.7173 5.45624 12.3563 5.45624 12.0001C5.45624 11.6415 5.48437 11.2829 5.54296 10.9337L5.69531 9.99619L3.92577 8.48447C4.19062 7.87275 4.52577 7.29619 4.92421 6.75947L7.11327 7.5376L7.84921 6.93057C8.40468 6.47354 9.02577 6.1126 9.69374 5.85947L10.582 5.52432L11.0016 3.24619C11.6601 3.17119 12.3328 3.17119 12.9937 3.24619L13.4133 5.51963L14.3062 5.85478C14.9789 6.10791 15.6047 6.46885 16.1648 6.92822L16.9008 7.53291L19.0758 6.76182C19.4742 7.29853 19.807 7.87744 20.0742 8.48682L18.3234 9.98447L18.4758 10.9196ZM12 7.64072C9.72187 7.64072 7.87499 9.4876 7.87499 11.7657C7.87499 14.0438 9.72187 15.8907 12 15.8907C14.2781 15.8907 16.125 14.0438 16.125 11.7657C16.125 9.4876 14.2781 7.64072 12 7.64072ZM13.8562 13.622C13.6128 13.8661 13.3234 14.0598 13.0049 14.1917C12.6863 14.3236 12.3448 14.3913 12 14.3907C11.2992 14.3907 10.6406 14.1165 10.1437 13.622C9.89958 13.3785 9.70596 13.0892 9.57403 12.7706C9.4421 12.452 9.37446 12.1105 9.37499 11.7657C9.37499 11.0649 9.64921 10.4063 10.1437 9.90947C10.6406 9.4126 11.2992 9.14072 12 9.14072C12.7008 9.14072 13.3594 9.4126 13.8562 9.90947C14.1004 10.1529 14.294 10.4423 14.426 10.7608C14.5579 11.0794 14.6255 11.4209 14.625 11.7657C14.625 12.4665 14.3508 13.1251 13.8562 13.622Z"
        fill={active ? '#00A885' : 'white'}
      />
    </svg>
  );
};

export const CallIcon = ({ active }: { active: boolean }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.67187 11.6998C9.44364 13.2935 10.7324 14.579 12.3281 15.3467C12.4458 15.4024 12.576 15.4265 12.7059 15.4167C12.8358 15.4068 12.9608 15.3633 13.0687 15.2904L15.4125 13.7248C15.516 13.6546 15.6357 13.6117 15.7603 13.6002C15.8849 13.5887 16.0104 13.609 16.125 13.6592L20.5125 15.5435C20.6625 15.6059 20.7877 15.7159 20.869 15.8565C20.9504 15.9971 20.9832 16.1606 20.9625 16.3217C20.8234 17.407 20.2937 18.4046 19.4723 19.1276C18.6509 19.8506 17.5943 20.2495 16.5 20.2498C13.1185 20.2498 9.87548 18.9065 7.48439 16.5154C5.0933 14.1243 3.75 10.8813 3.75 7.49979C3.75025 6.40553 4.1492 5.34886 4.87221 4.5275C5.59522 3.70613 6.59274 3.17635 7.67812 3.03729C7.83922 3.01659 8.00266 3.04943 8.14326 3.13074C8.28386 3.21206 8.39384 3.33733 8.45625 3.48729L10.3406 7.88416C10.3896 7.99699 10.4101 8.12013 10.4003 8.24275C10.3905 8.36537 10.3507 8.48369 10.2844 8.58729L8.71875 10.9685C8.64905 11.0762 8.60814 11.2 8.59993 11.328C8.59172 11.4561 8.61649 11.5841 8.67187 11.6998V11.6998Z"
        stroke={active ? '#00A885' : 'white'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const AllContactIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.475 5.40783L18.592 7.52483M17.836 3.54283L12.109 9.26983C11.8131 9.56533 11.6113 9.94181 11.529 10.3518L11 12.9998L13.648 12.4698C14.058 12.3878 14.434 12.1868 14.73 11.8908L20.457 6.16383C20.6291 5.99173 20.7656 5.78742 20.8588 5.56256C20.9519 5.33771 20.9998 5.09671 20.9998 4.85333C20.9998 4.60994 20.9519 4.36895 20.8588 4.14409C20.7656 3.91923 20.6291 3.71492 20.457 3.54283C20.2849 3.37073 20.0806 3.23421 19.8557 3.14108C19.6309 3.04794 19.3899 3 19.1465 3C18.9031 3 18.6621 3.04794 18.4373 3.14108C18.2124 3.23421 18.0081 3.37073 17.836 3.54283Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 15V18C19 18.5304 18.7893 19.0391 18.4142 19.4142C18.0391 19.7893 17.5304 20 17 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H9"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const SearchIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.75003 1.6665C7.62052 1.6666 6.50742 1.93681 5.50358 2.45458C4.49974 2.97236 3.63427 3.72268 2.97939 4.64297C2.32451 5.56325 1.8992 6.62679 1.73895 7.74487C1.5787 8.86295 1.68815 10.0031 2.05818 11.0703C2.4282 12.1375 3.04807 13.1007 3.86606 13.8796C4.68405 14.6585 5.67645 15.2305 6.76046 15.5478C7.84446 15.8652 8.98865 15.9187 10.0975 15.7039C11.2064 15.4892 12.2479 15.0123 13.135 14.3132L16.1784 17.3565C16.3355 17.5083 16.546 17.5923 16.7645 17.5904C16.983 17.5885 17.192 17.5009 17.3465 17.3464C17.5011 17.1918 17.5887 16.9828 17.5906 16.7643C17.5925 16.5458 17.5085 16.3353 17.3567 16.1782L14.3134 13.1348C15.1367 12.0904 15.6493 10.8352 15.7926 9.51294C15.9359 8.19071 15.704 6.85485 15.1235 5.65825C14.5431 4.46164 13.6374 3.45263 12.5103 2.7467C11.3831 2.04076 10.08 1.66641 8.75003 1.6665ZM3.33336 8.74984C3.33336 7.31325 3.90404 5.9355 4.91987 4.91968C5.93569 3.90385 7.31344 3.33317 8.75003 3.33317C10.1866 3.33317 11.5644 3.90385 12.5802 4.91968C13.596 5.9355 14.1667 7.31325 14.1667 8.74984C14.1667 10.1864 13.596 11.5642 12.5802 12.58C11.5644 13.5958 10.1866 14.1665 8.75003 14.1665C7.31344 14.1665 5.93569 13.5958 4.91987 12.58C3.90404 11.5642 3.33336 10.1864 3.33336 8.74984Z"
        fill="currentColor"
      />
    </svg>
  );
};
export const EyeSvgIcon = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const defaultColor = "#88837B";
  const hoverColor = "#68645E";

  return (
    <div
      className="w-8 h-8 cursor-pointer transition-colors duration-300 ease-in-out"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 6.125C5.25 6.125 1.75 14 1.75 14C1.75 14 5.25 21.875 14 21.875C22.75 21.875 26.25 14 26.25 14C26.25 14 22.75 6.125 14 6.125Z"
          stroke={isHovered ? hoverColor : defaultColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 18.375C16.4162 18.375 18.375 16.4162 18.375 14C18.375 11.5838 16.4162 9.625 14 9.625C11.5838 9.625 9.625 11.5838 9.625 14C9.625 16.4162 11.5838 18.375 14 18.375Z"
          stroke={isHovered ? hoverColor : defaultColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export const ClosedEyeSvgIcon = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const defaultColor = "#88837B";
  const hoverColor = "#68645E";

  return (
    <div
      className="w-8 h-8 cursor-pointer transition-colors duration-300 ease-in-out"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="none"
        viewBox="0 0 20 20"
      >
        <mask id="path-1-inside-1_982_3069" fill="#fff">
          <path d="M10 14.167A4.167 4.167 0 0014.168 10a4.083 4.083 0 00-.683-2.267l2.983-2.975a.836.836 0 10-1.183-1.183l-3.017 2.983a4.083 4.083 0 00-2.266-.683 4.167 4.167 0 00-4.125 4.167 4.083 4.083 0 00.683 2.266l-2.983 2.934a.837.837 0 101.183 1.183l2.975-2.983a4.084 4.084 0 002.267.725zM12.543 10a2.5 2.5 0 01-3.641 2.283l3.333-3.333c.178.323.283.682.308 1.05zm-5.041 0a2.5 2.5 0 013.641-2.283L7.81 11.05A2.542 2.542 0 017.501 10zm-4.75 3.333a8.908 8.908 0 01-1.342-1.666A3.208 3.208 0 01.834 10c.01-.37.098-.734.258-1.067a6.55 6.55 0 01.617-1.041c.59-.77 1.276-1.463 2.042-2.059 1.75-1.5 3.947-2.38 6.25-2.5.629.002 1.256.08 1.866.234a.833.833 0 11-.4 1.616A6.367 6.367 0 0010.001 5a7.625 7.625 0 00-3.559 1.008 11.458 11.458 0 00-2.85 2.217c-.39.41-.72.877-.975 1.383-.06.124-.098.256-.116.392.048.282.159.55.325.783.31.486.677.933 1.091 1.334a.843.843 0 11-1.166 1.216zM19.167 10c-.01.37-.097.733-.258 1.067a6.55 6.55 0 01-.575 1.041 11.376 11.376 0 01-2.083 2.059 10.443 10.443 0 01-6.25 2.5 7.79 7.79 0 01-1.867-.234.833.833 0 01.4-1.616c.48.117.972.179 1.467.183a7.626 7.626 0 003.558-1.008 11.459 11.459 0 002.85-2.217c.391-.41.72-.877.975-1.383.06-.124.099-.256.117-.392a1.668 1.668 0 00-.267-.742 5.377 5.377 0 00-.983-1.216.833.833 0 01-.042-1.175.833.833 0 011.175-.042 7.06 7.06 0 011.3 1.608c.286.476.452 1.013.483 1.567z"></path>
        </mask>
        <path
          fill={isHovered ? hoverColor : defaultColor}
          d="M10 14.167A4.167 4.167 0 0014.168 10a4.083 4.083 0 00-.683-2.267l2.983-2.975a.836.836 0 10-1.183-1.183l-3.017 2.983a4.083 4.083 0 00-2.266-.683 4.167 4.167 0 00-4.125 4.167 4.083 4.083 0 00.683 2.266l-2.983 2.934a.837.837 0 101.183 1.183l2.975-2.983a4.084 4.084 0 002.267.725zM12.543 10a2.5 2.5 0 01-3.641 2.283l3.333-3.333c.178.323.283.682.308 1.05zm-5.041 0a2.5 2.5 0 013.641-2.283L7.81 11.05A2.542 2.542 0 017.501 10zm-4.75 3.333a8.908 8.908 0 01-1.342-1.666A3.208 3.208 0 01.834 10c.01-.37.098-.734.258-1.067a6.55 6.55 0 01.617-1.041c.59-.77 1.276-1.463 2.042-2.059 1.75-1.5 3.947-2.38 6.25-2.5.629.002 1.256.08 1.866.234a.833.833 0 11-.4 1.616A6.367 6.367 0 0010.001 5a7.625 7.625 0 00-3.559 1.008 11.458 11.458 0 00-2.85 2.217c-.39.41-.72.877-.975 1.383-.06.124-.098.256-.116.392.048.282.159.55.325.783.31.486.677.933 1.091 1.334a.843.843 0 11-1.166 1.216zM19.167 10c-.01.37-.097.733-.258 1.067a6.55 6.55 0 01-.575 1.041 11.376 11.376 0 01-2.083 2.059 10.443 10.443 0 01-6.25 2.5 7.79 7.79 0 01-1.867-.234.833.833 0 01.4-1.616c.48.117.972.179 1.467.183a7.626 7.626 0 003.558-1.008 11.459 11.459 0 002.85-2.217c.391-.41.72-.877.975-1.383.06-.124.099-.256.117-.392a1.668 1.668 0 00-.267-.742 5.377 5.377 0 00-.983-1.216.833.833 0 01-.042-1.175.833.833 0 011.175-.042 7.06 7.06 0 011.3 1.608c.286.476.452 1.013.483 1.567z"
        ></path>
        <path
          fill={isHovered ? hoverColor : defaultColor}
          d="M10 14.167L9.978 15.9H10v-1.734zM14.168 10l-1.734-.002V10h1.734zm-.683-2.267l-1.225-1.228-1.007 1.004.788 1.185 1.444-.96zm2.983-2.975l1.225 1.228.002-.001-1.227-1.227zm.245-.591h-1.734 1.734zm-1.428-.592l1.22 1.233.006-.007-1.226-1.226zm-3.017 2.983l-.96 1.444 1.176.782 1.004-.993-1.22-1.233zm-2.266-.683L9.998 4.14h-.015l.018 1.734zm-4.125 4.167l1.734.002v-.003H5.876zm.683 2.266l1.216 1.237 1.021-1.004-.793-1.193-1.444.96zm-2.983 2.934L2.36 14.005l-.005.005-.006.005 1.227 1.227zm-.245.591H1.596h1.735zm.836.837v-1.734 1.734zm.592-.245l1.226 1.226.002-.002-1.228-1.224zm2.975-2.983l.987-1.427-1.192-.824-1.023 1.026 1.228 1.225zm1.167-1.159l-1.227-1.226-1.682 1.682 2.116 1.087.793-1.543zm3.333-3.333l1.52-.835L12.64 6.09l-1.633 1.634 1.226 1.226zm.135-.007A1.734 1.734 0 109.916 6.49l2.453 2.453zm-4.56 2.107l-1.52.835 1.113 2.025 1.633-1.634L7.81 11.05zM7.501 10l-1.734.041v.04l.003.038 1.73-.12zm-6.092 1.667l1.472-.918-.025-.039-.026-.038-1.421.995zM.834 10L-.9 9.955l-.001.07.003.068L.834 10zm.258-1.067l1.562.754.006-.012-1.568-.742zm.617-1.041L.332 6.837l-.014.018-.013.019 1.404 1.018zm2.042-2.059l1.065 1.369.032-.026.031-.026-1.128-1.317zm6.25-2.5l.005-1.734h-.048L9.91 1.6 10 3.333zm1.866.234l-.421 1.682.035.009.035.007.351-1.698zm-.4 1.616l.482-1.666-.034-.01-.034-.008-.414 1.684zM10.001 5l.014-1.734h-.068L10 5zM6.442 6.008l.836 1.52.014-.008.014-.008-.864-1.504zm-2.85 2.217L4.848 9.42l.006-.006.005-.006-1.267-1.184zm-.975 1.383l-1.548-.78-.008.014-.007.014 1.563.752zM2.501 10L.78 9.774l-.034.26.044.258L2.501 10zm.325.783l1.46-.935-.022-.035-.024-.034-1.414 1.004zm2.292.082a1.734 1.734 0 00-2.401 2.503l2.4-2.503zm-1.2 1.252l-1.206 1.247.005.004 1.2-1.251zM2.75 13.333l-1.21 1.242.004.005.005.005 1.2-1.252zM19.167 10l1.734.044.002-.071-.004-.072-1.732.099zm-.258 1.067l-1.562-.754-.014.028-.012.029 1.588.697zm-.575 1.041l1.368 1.067.035-.046.033-.048-1.436-.973zm-2.083 2.059l-1.05-1.38-.04.03-.04.033 1.13 1.317zm-6.25 2.5L9.995 18.4h.048l.048-.003-.09-1.731zm-1.867-.234L7.653 18.1l.03.009.03.008.421-1.683zm.4-1.616l.413-1.685-.03-.007-.032-.007-.351 1.699zm1.467.183l-.014 1.734h.068L10 15zm3.558-1.008l-.836-1.52-.014.008-.013.008.863 1.504zm2.85-2.217l-1.256-1.196-.005.006-.006.006 1.267 1.184zm.975-1.383l1.549.78.007-.014.007-.015-1.563-.751zm.117-.392l1.72.226.026-.205-.022-.205-1.724.184zm-.267-.742l-1.493.883.022.037.024.036 1.447-.956zm-2.168.05a1.734 1.734 0 102.37-2.533l-2.37 2.533zm1.185-1.266l-1.186 1.266.01.008 1.176-1.274zm-.042-1.175L14.943 5.68l-.006.006 1.272 1.18zm1.175-.042l-1.18 1.272.005.004 1.175-1.276zm1.3 1.608l-1.494.881.004.007.004.006 1.486-.894zm-8.683 7.468a5.9 5.9 0 004.172-1.729l-2.452-2.452a2.433 2.433 0 01-1.72.712v3.469zm4.172-1.729A5.901 5.901 0 0015.902 10h-3.469c0 .645-.256 1.264-.712 1.72l2.452 2.452zm1.729-4.17a5.818 5.818 0 00-.974-3.23L12.04 8.695c.257.386.394.84.393 1.304l3.469.004zm-1.193-1.04l2.983-2.976-2.45-2.456-2.983 2.975 2.45 2.456zm2.985-2.977a2.57 2.57 0 00.557-.835l-3.205-1.327a.897.897 0 01.195-.291l2.453 2.453zm.557-.835c.13-.311.196-.646.196-.983h-3.469c0-.118.023-.235.068-.344l3.205 1.327zm.196-.983c0-.338-.067-.672-.196-.984L15.046 4.51a.898.898 0 01-.068-.343h3.469zm-.196-.984a2.57 2.57 0 00-.557-.834L15.24 4.8a.897.897 0 01-.195-.291l3.205-1.327zm-.557-.834a2.57 2.57 0 00-.834-.558l-1.328 3.205a.897.897 0 01-.291-.195l2.453-2.452zm-.834-.558a2.57 2.57 0 00-.984-.195v3.468a.898.898 0 01-.344-.068L16.86 1.79zm-.984-.195a2.57 2.57 0 00-.984.195l1.327 3.205a.898.898 0 01-.343.068V1.596zm-.984.195a2.57 2.57 0 00-.834.558L16.51 4.8a.897.897 0 01-.29.195L14.891 1.79zm-.827.55l-3.017 2.984 2.439 2.466 3.016-2.983-2.438-2.466zm-.837 2.773a5.818 5.818 0 00-3.23-.973l.005 3.468c.464 0 .918.136 1.304.393l1.92-2.888zm-3.245-.973A5.9 5.9 0 005.85 5.89l2.465 2.44a2.432 2.432 0 011.704-.72l-.035-3.47zM5.85 5.89a5.901 5.901 0 00-1.708 4.152H7.61c0-.641.253-1.256.704-1.712L5.849 5.89zM4.14 10.04a5.818 5.818 0 00.974 3.229l2.888-1.921a2.349 2.349 0 01-.393-1.304l-3.469-.005zm1.202 1.032L2.36 14.005l2.432 2.473 2.983-2.933-2.432-2.473zM2.35 14.015a2.57 2.57 0 00-.753 1.818h3.469a.898.898 0 01-.263.635l-2.453-2.453zm-.753 1.818c0 .682.271 1.336.753 1.818L4.802 15.2a.897.897 0 01.263.634H1.596zm.753 1.818a2.57 2.57 0 001.818.753v-3.468c.238 0 .467.094.635.263L2.349 17.65zm1.818.753a2.57 2.57 0 001.818-.753L3.533 15.2a.898.898 0 01.634-.263v3.468zm1.82-.755l2.975-2.983-2.456-2.449L3.531 15.2l2.456 2.45zm.76-2.781a5.817 5.817 0 003.23 1.033l.048-3.469a2.35 2.35 0 01-1.304-.417l-1.974 2.853zm4.062-4.827a.765.765 0 01-.092.381l3.055 1.643a4.234 4.234 0 00.504-2.106l-3.467.082zm-.092.381a.767.767 0 01-.267.286l1.842 2.939a4.235 4.235 0 001.48-1.582l-3.055-1.643zm-.267.286a.765.765 0 01-.374.117l.148 3.465a4.233 4.233 0 002.068-.643l-1.842-2.939zm-.374.117a.765.765 0 01-.383-.084l-1.585 3.085a4.234 4.234 0 002.116.464l-.148-3.465zm.051 2.685l3.333-3.334-2.452-2.452-3.334 3.333 2.453 2.453zm.587-3.725c.057.103.09.217.098.334l3.46-.238a4.276 4.276 0 00-.518-1.767l-3.04 1.671zm-1.48.174a.766.766 0 01.092-.381L6.27 7.935a4.234 4.234 0 00-.504 2.106l3.467-.082zm.092-.381a.766.766 0 01.267-.286l-1.842-2.94a4.234 4.234 0 00-1.48 1.583l3.055 1.643zm.267-.286a.766.766 0 01.374-.117L9.82 5.71a4.234 4.234 0 00-2.068.643l1.842 2.939zm.374-.117a.766.766 0 01.383.084l1.585-3.085a4.234 4.234 0 00-2.116-.464l.148 3.465zM9.916 6.49L6.583 9.824l2.452 2.452 3.334-3.333L9.916 6.49zm-.587 3.724a.808.808 0 01-.098-.333l-3.46.238c.042.62.22 1.222.518 1.766l3.04-1.67zM3.96 12.091a7.175 7.175 0 01-1.08-1.342l-2.944 1.835c.453.726.99 1.394 1.603 1.991l2.421-2.484zM2.83 10.672a1.474 1.474 0 01-.264-.765l-3.464.186c.05.922.357 1.812.886 2.568l2.842-1.989zm-.262-.628a.874.874 0 01.086-.357L-.47 8.18A4.343 4.343 0 00-.9 9.955l3.468.09zm.092-.369c.127-.269.279-.525.453-.766L.305 6.874c-.3.414-.562.855-.78 1.317L2.66 9.675zm.426-.729a9.64 9.64 0 011.73-1.744L2.685 4.465A13.11 13.11 0 00.332 6.837l2.754 2.109zM4.879 7.15a8.707 8.707 0 015.212-2.085L9.91 1.601a12.176 12.176 0 00-7.288 2.916L4.879 7.15zm5.116-2.082c.49.001.976.062 1.451.18l.843-3.364a9.526 9.526 0 00-2.283-.285l-.011 3.469zm1.521.197a.902.902 0 01-.33-.142l1.976-2.85a2.567 2.567 0 00-.944-.405l-.702 3.397zm-.33-.142a.901.901 0 01-.25-.26l2.935-1.849a2.567 2.567 0 00-.71-.741l-1.976 2.85zm-.25-.26a.9.9 0 01-.127-.337l3.425-.552a2.566 2.566 0 00-.363-.96l-2.935 1.849zm-.127-.337a.9.9 0 01.015-.36L14.191 5c.083-.335.098-.684.042-1.025l-3.424.552zm.015-.36a.9.9 0 01.155-.325l2.772 2.085c.207-.276.357-.591.44-.927l-3.367-.833zm.155-.325a.9.9 0 01.27-.239l1.733 3.004c.3-.172.56-.404.769-.68l-2.772-2.085zm.27-.239a.9.9 0 01.34-.114l.42 3.443c.343-.041.674-.152.973-.325l-1.734-3.004zm.34-.114a.9.9 0 01.36.03l-.963 3.331c.332.096.68.124 1.023.082l-.42-3.443zm.292.01a8.1 8.1 0 00-1.867-.232l-.027 3.468c.36.003.718.048 1.067.134l.827-3.37zm-1.934-.232a9.36 9.36 0 00-4.368 1.238l1.727 3.008a5.89 5.89 0 012.749-.779l-.108-3.467zM5.607 4.49A13.192 13.192 0 002.325 7.04L4.86 9.409a9.724 9.724 0 012.42-1.881l-1.672-3.04zm-3.27 2.54a7.51 7.51 0 00-1.268 1.799l3.097 1.56a4.04 4.04 0 01.682-.967L2.336 7.029zM1.053 8.856c-.139.29-.231.6-.273.918l3.44.452a.442.442 0 01-.04.134L1.053 8.856zm-.263 1.436c.092.539.304 1.05.62 1.495L4.24 9.78a.174.174 0 01-.03-.071l-3.419.584zm.574 1.426a9.147 9.147 0 001.347 1.646l2.41-2.495a5.672 5.672 0 01-.836-1.02l-2.92 1.87zm1.352 1.65a.892.892 0 01-.274-.624l3.468-.073a2.577 2.577 0 00-.793-1.806l-2.401 2.503zm-.274-.624a.891.891 0 01.248-.636l2.503 2.4c.473-.493.73-1.154.717-1.837l-3.468.073zm.248-.636a.892.892 0 01.624-.274l.073 3.467a2.577 2.577 0 001.806-.792l-2.503-2.401zm.624-.274a.892.892 0 01.636.248l-2.4 2.503c.493.473 1.154.73 1.837.716l-.073-3.467zm14.119-1.879a.874.874 0 01-.087.358l3.124 1.507c.268-.555.414-1.16.43-1.776l-3.467-.089zm-.113.415a4.82 4.82 0 01-.423.766l2.872 1.945a8.29 8.29 0 00.727-1.318l-3.176-1.393zm-.355.672a9.638 9.638 0 01-1.765 1.744l2.1 2.76a13.11 13.11 0 002.4-2.371l-2.735-2.133zm-1.844 1.808a8.708 8.708 0 01-5.212 2.085l.181 3.463a12.176 12.176 0 007.288-2.915l-2.257-2.633zm-5.116 2.082a6.053 6.053 0 01-1.45-.181l-.843 3.365a9.528 9.528 0 002.282.285l.011-3.469zm-1.39-.165a.901.901 0 01.53.415l-3.004 1.734c.331.575.873 1 1.51 1.183l.963-3.332zm.53.415c.116.202.15.441.094.667l-3.367-.833a2.568 2.568 0 00.269 1.9l3.004-1.734zm.094.667a.9.9 0 01-.394.546l-1.85-2.935a2.567 2.567 0 00-1.123 1.556l3.367.833zm-.394.546a.901.901 0 01-.663.12l.702-3.397a2.567 2.567 0 00-1.888.342l1.849 2.935zm-.725.106c.61.15 1.237.228 1.866.233l.027-3.468a4.636 4.636 0 01-1.067-.134l-.826 3.369zm1.934.232a9.36 9.36 0 004.367-1.237l-1.726-3.008a5.892 5.892 0 01-2.75.779l.109 3.466zm4.34-1.222a13.194 13.194 0 003.281-2.552l-2.534-2.368a9.726 9.726 0 01-2.419 1.881l1.672 3.04zm3.27-2.54a7.512 7.512 0 001.268-1.799l-3.098-1.561a4.04 4.04 0 01-.682.968l2.512 2.392zm1.282-1.828c.14-.289.231-.599.273-.917l-3.439-.452a.447.447 0 01.04-.134l3.126 1.503zm.278-1.327a3.402 3.402 0 00-.544-1.514l-2.894 1.912a.067.067 0 01-.01-.03l3.448-.368zm-.498-1.44a7.108 7.108 0 00-1.3-1.61l-2.352 2.55c.26.241.485.519.666.824l2.986-1.764zm-1.291-1.6a.901.901 0 01.285.625l-3.467.123c.024.679.316 1.32.812 1.784l2.37-2.533zm.285.625a.901.901 0 01-.24.645l-2.544-2.359a2.567 2.567 0 00-.683 1.837l3.467-.123zm-.246.65a.901.901 0 01-.626.285l-.123-3.466a2.567 2.567 0 00-1.783.811l2.532 2.37zm-.626.285a.9.9 0 01-.644-.24l2.358-2.543a2.568 2.568 0 00-1.837-.683l.123 3.466zm-.64-.235c.385.354.715.763.981 1.213l2.988-1.762a8.793 8.793 0 00-1.62-2.003L16.21 8.1zm.989 1.226c.14.234.222.499.238.772l3.463-.198a5.15 5.15 0 00-.729-2.362l-2.972 1.788z"
          mask="url(#path-1-inside-1_982_3069)"
        ></path>
      </svg>
    </div>
  );
};

export const ManageEstateSvgIcon = ({ color }: { color: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <g clipPath="url(#clip0_982_1902)">
        <path
          d="M13.75 18.85H13.85V18.75V15.625C13.85 14.4382 13.3785 13.2999 12.5393 12.4607C11.7001 11.6215 10.5618 11.15 9.375 11.15H5.625C4.43816 11.15 3.29992 11.6215 2.4607 12.4607C1.62147 13.2999 1.15 14.4382 1.15 15.625V18.75V18.85H1.25H2.5H2.6V18.75V15.625C2.6 14.8227 2.9187 14.0533 3.486 13.486C4.0533 12.9187 4.82272 12.6 5.625 12.6H9.375C10.1773 12.6 10.9467 12.9187 11.514 13.486C12.0813 14.0533 12.4 14.8227 12.4 15.625V18.75V18.85H12.5H13.75ZM13.75 2.4H13.65V2.5V3.75V3.85H13.75H20H20.1V3.75V2.5V2.4H20H13.75ZM13.75 5.525H13.65V5.625V6.875V6.975H13.75H20H20.1V6.875V5.625V5.525H20H13.75ZM13.75 8.65H13.65V8.75V10V10.1H13.75H18.125H18.225V10V8.75V8.65H18.125H13.75ZM7.5 2.6C8.09829 2.6 8.68314 2.77741 9.1806 3.1098C9.67806 3.4422 10.0658 3.91464 10.2947 4.46738C10.5237 5.02013 10.5836 5.62836 10.4669 6.21515C10.3502 6.80194 10.0621 7.34094 9.639 7.764C9.21594 8.18705 8.67694 8.47516 8.09015 8.59188C7.50336 8.7086 6.89513 8.64869 6.34238 8.41974C5.78964 8.19078 5.3172 7.80306 4.9848 7.3056C4.65241 6.80814 4.475 6.22329 4.475 5.625C4.475 4.82272 4.7937 4.0533 5.361 3.486C5.9283 2.9187 6.69772 2.6 7.5 2.6ZM7.5 1.15C6.61493 1.15 5.74973 1.41245 5.01382 1.90417C4.27791 2.39589 3.70434 3.09479 3.36564 3.91249C3.02694 4.73019 2.93832 5.62996 3.11099 6.49803C3.28365 7.36609 3.70986 8.16346 4.3357 8.7893C4.96154 9.41514 5.75891 9.84134 6.62697 10.014C7.49504 10.1867 8.39481 10.0981 9.21251 9.75936C10.0302 9.42066 10.7291 8.84709 11.2208 8.11118C11.7125 7.37527 11.975 6.51007 11.975 5.625C11.975 4.43816 11.5035 3.29992 10.6643 2.4607C9.82508 1.62147 8.68684 1.15 7.5 1.15Z"
          fill={color}
          stroke={color}
          strokeWidth="0.2"
        />
      </g>
      <defs>
        <clipPath id="clip0_982_1902">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const CloseSvgModal = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M17.0001 17L7.00004 6.99996M7.00004 17L17.0001 6.99996L7.00004 17Z"
        stroke="#88837B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const SearchSvgIcon = () => {
  return (
    <svg 
    width="54" 
    height="54" 
    viewBox="0 0 54 54" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    >
      <path 
      d="M38.358 35.3114L37.946 35.8353L38.4178 36.3059L48.3172 46.1828C48.3173 46.183 48.3175 46.1832 48.3177 46.1833C48.6004 46.4663 48.7592 46.85 48.7592 47.25C48.7592 47.6503 48.6002 48.0341 48.3172 48.3172C48.0341 48.6002 47.6503 48.7592 47.25 48.7592C46.85 48.7592 46.4663 48.6004 46.1833 48.3177C46.1832 48.3175 46.183 48.3173 46.1828 48.3172L36.3059 38.4178L35.8353 37.946L35.3114 38.358C32.3012 40.725 28.581 42.0081 24.7516 42H24.75C21.3383 42 18.0032 40.9883 15.1664 39.0929C12.3297 37.1974 10.1187 34.5033 8.81309 31.3513C7.50747 28.1993 7.16587 24.7309 7.83146 21.3847C8.49706 18.0385 10.14 14.9649 12.5524 12.5524C14.9649 10.14 18.0385 8.49706 21.3847 7.83146C24.7309 7.16587 28.1993 7.50747 31.3513 8.81309C34.5033 10.1187 37.1974 12.3297 39.0929 15.1664C40.9883 18.0032 42 21.3383 42 24.75L42 24.7516C42.0081 28.581 40.725 32.3012 38.358 35.3114ZM14.6856 34.9387L15.96 36.1849V35.9567C18.4539 37.9156 21.5456 38.9972 24.7493 39L24.7556 39C28.0546 38.9752 31.2428 37.8065 33.7762 35.6934C36.3097 33.5802 38.0314 30.6535 38.6477 27.4125C39.264 24.1715 38.7367 20.8171 37.1557 17.9215C35.5748 15.026 33.0381 12.7686 29.9785 11.5347C26.9189 10.3008 23.5259 10.1666 20.3785 11.1552C17.231 12.1438 14.5241 14.1938 12.7195 16.9556C10.9149 19.7173 10.1244 23.0197 10.483 26.2992C10.8416 29.5787 12.3269 32.6322 14.6856 34.9387Z" 
      fill="black" 
      stroke="black" 
      // stroke-width="1.5" 
      // stroke-linecap="round"
      />
    </svg>
  )
}