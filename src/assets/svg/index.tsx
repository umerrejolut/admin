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

export const SearchIcon = ({}) => {
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
