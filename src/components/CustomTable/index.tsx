import classNames from "classnames";
import { useMemo, useState } from "react";
import CustomPagination from "../CustomePagination";
import { Row, RowData } from "@/Common/interface";
// import CustomPagination from "../CustomPagination";
// import { DownArrowSvgIcon, UpArrowSvgIcon } from "../../assets/svgimages";

interface CustomTableProps {
  data: RowData[]; // Adjust the type according to your data structure
  headers: {
    key: string;
    label: string;
    sortable: boolean;
    render?: (row: Row, index: number, sr: number) => JSX.Element;
  }[]; // Assuming headers are strings
  itemsPerPage: number;
}

const CustomTable = ({ data, headers, itemsPerPage}: CustomTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<{ key: string | null, direction: string }>({ key: null, direction: "" });

  const sortData = (key: string) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };
  // Helper function to check if a string is a valid date in "yyyy-mm-ddThh:mm:ss" format
  // const isDateString = (str: any) => {
  //   const dateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
  //   return dateRegex.test(str);
  // };

  // function getValueByNestedKey({object, key}: any) {
  //   const keys = key.split('.');
  //   let value = object;
  //   for (const nestedKey of keys) {
  //     if (value.hasOwnProperty(nestedKey)) {
  //       value = value[nestedKey];
  //     } else {
  //       return null; // or any other default value you prefer
  //     }
  //   }

  //   return value;
  // }


  const sortedData = useMemo(() => {
    const sortedArray = [...data];
    // if (sortConfig.key) {
    //   sortedArray.sort((a, b) => {
    //     const aValue = sortConfig.key.includes('.') ? getValueByNestedKey(a, sortConfig.key)
    //       : a.hasOwnProperty(sortConfig.key) ? a[sortConfig.key] : '';
    //     const bValue = sortConfig.key.includes('.') ? getValueByNestedKey(a, sortConfig.key)
    //       : b.hasOwnProperty(sortConfig.key) ? b[sortConfig.key] : '';
    //     // Handle boolean sorting
    //     if (typeof aValue === 'boolean' && typeof bValue === 'boolean') {
    //       return sortConfig.direction === 'asc' ? (aValue - bValue) : (bValue - aValue);
    //     }

    //     // Handle number sorting
    //     if (typeof aValue === 'number' && typeof bValue === 'number') {
    //       return sortConfig.direction === 'asc' ? aValue - bValue : bValue - aValue;
    //     }

    //     // Handle date sorting (assuming values are in "yyyy-mm-ddThh:mm:ss" format)
    //     if (isDateString(aValue) && isDateString(bValue)) {
    //       const dateA = new Date(aValue);
    //       const dateB = new Date(bValue);
    //       if (isNaN(dateA) || isNaN(dateB)) {
    //         // Handle invalid date strings by comparing them as strings
    //         return sortConfig.direction === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
    //       }

    //       return sortConfig.direction === 'asc' ? dateA - dateB : dateB - dateA;
    //     }
    //     // Default to string sorting
    //     return sortConfig.direction === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
    //   });
    // }
    return sortedArray;
  }, [data, sortConfig]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItemsToShow = sortedData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = itemsPerPage ? Math.ceil(data.length / itemsPerPage) : 0;

  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);
  
  return (
    <div className="bg-bgColor p-3 rounded-xl shadow-tablerShadow">
      <div className="bg-white p-4">
        <table className="table-fixed w-full">
          <thead className="bg-headerBg h-[32px]">
            <tr className="h-[100%]">
              {headers.map((header) => (
                <th
                  key={header.key}
                  className={classNames(
                    "px-4 py-2 cursor-pointer text-labelColor text-headerText font-normal",
                    {
                      "w-20": header.key === "no",
                    }
                  )}
                  onClick={() => sortData(header.key)}
                >
                  <div className="flex items-center justify-center gap-1 w-full">
                    {header.label}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentItemsToShow.map((item, index) => (
                    <tr key={item.id}>
                    {headers.map((header) => (
                      <td
                        key={header.key}
                        className={classNames(
                          "text-center px-4 py-2",
                          {
                            "w-60 overflow-hidden whitespace-nowrap text-ellipsis":
                              header.key === "description",
                          },
                          {
                            "text-sideBarBg text-start": header.key === "name",
                          },
                          {
                            "w-20": header.key === "no",
                          },
                          "overflow-hidden whitespace-nowrap text-ellipsis text-labelColor font-medium text-sm"
                        )}
                      >
                        {header.render ? (
                          <div>
                            {header.render(
                              item,
                              index,
                              (currentPage - 1) * itemsPerPage + index + 1
                            )}
                          </div>
                        ) : (
                          // item[header.key] || "-"
                          item[header.key as keyof Row] || "-"
                          )}
                      </td>
                    ))}
                  </tr>
            ))}
          </tbody>
        </table>
      </div>
      <CustomPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
export default CustomTable;
