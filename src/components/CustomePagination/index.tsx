import classNames from "classnames";

interface CustomPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
  setCurrentPage: (page: number) => void;
}

const CustomPagination = ({ currentPage, totalPages, onPageChange, setCurrentPage }: CustomPaginationProps) => {
  
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className=" p-4 flex justify-center">
      <ul className="flex">
        {pageNumbers.map((pageNumber) => (
          <li
            key={pageNumber}
            className={classNames(
              "px-3 py-1 cursor-pointer text-labelColor font-normal text-sm",
              currentPage === pageNumber &&
                "text-sideBarBg font-normal text-sm bg-headerBg rounded-numberBorder"
            )}
            onClick={() => {onPageChange(pageNumber),
            setCurrentPage(pageNumber);
            }}

          >
            {pageNumber}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomPagination;
