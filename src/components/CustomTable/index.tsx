import classNames from "classnames";
import { useState } from "react";
import CustomPagination from "../CustomePagination";
import { Row, RowData } from "@/Common/interface";

interface CustomTableProps {
  data: RowData[];
  headers: {
    key: string;
    label: string;
    sortable: boolean;
    render?: (row: Row, index: number, sr: number) => JSX.Element;
  }[];
  itemsPerPage: number;
  totalCount: number;
  setCurrentOffset: (offset: number) => void;
  handlePageChange: (page: number) => void;
  message?: string;
}

const CustomTable = ({ data, headers, itemsPerPage, totalCount, handlePageChange, message}: CustomTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  // const totalPages = itemsPerPage ? Math.ceil(data.length / itemsPerPage) : 0;
  const totalPages = itemsPerPage ? Math.ceil(totalCount / itemsPerPage) : 0;
  
  return (
    <div className="bg-bgColor p-3 rounded-xl shadow-tablerShadow min-h-[600px]">
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
                >
                  <div className="flex items-center justify-center gap-1 w-full">
                    {header.label}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {!message ? data.map((item, index) => (
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
                            "text-sideBarBg text-center": header.key === "name",
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
            )) : (
              <tr>
                <td colSpan={headers.length} className="text-center capitalize">
                  <h2 className="font-medium text-lg text-headingColor pt-4">{message}</h2>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <CustomPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
export default CustomTable;
