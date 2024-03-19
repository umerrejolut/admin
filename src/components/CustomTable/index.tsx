import classNames from "classnames";
import { useState } from "react";
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

  const domeyData = [
    {
        "id": "e9f4ee04-2393-47a8-971a-9b5effc33385",
        "createdAt": "2024-03-07T12:09:06.089Z",
        "organizationId": "87560841-8409-40b4-bd0d-2274740dca7c",
        "name": "Tastepass Indian Estate",
        "location": "Nashik",
        "email": "badsha.h@rejolut.com",
        "mobile": "+918169057097",
        "deleted": false,
        "appelation": {
            "iso_iwin": "IN201",
            "display_name": "Nashik"
        },
        "country": {
            "name": "India",
            "name_en": "India",
            "iso_iwin": "IN"
        },
        "estateIwinId": "65e9ae61503a54c7d205d3b1",
        "region": {
            "name": "Deccan Plateau",
            "iso_iwin": "IN2"
        }
    },
    {
        "id": "427f410c-3ff8-47ae-9934-cbfa6758654a",
        "createdAt": "2024-03-13T05:17:59.801Z",
        "organizationId": "87560841-8409-40b4-bd0d-2274740dca7c",
        "name": "Tastepass Indian Estate",
        "location": "Nashik",
        "email": "badsha.h@rejolut.com",
        "mobile": "+918169057097",
        "deleted": false,
        "appelation": {
            "iso_iwin": "IN201",
            "display_name": "Nashik"
        },
        "country": {
            "name": "India",
            "name_en": "India",
            "iso_iwin": "IN"
        },
        "estateIwinId": "60b37e4e2f5adf0a385e294a",
        "region": {
            "name": "Deccan Plateau",
            "iso_iwin": "IN2"
        }
    },
    {
        "id": "7acbdb57-5795-4d5f-b837-2ff600fb01a5",
        "createdAt": "2024-03-13T05:19:26.506Z",
        "organizationId": "87560841-8409-40b4-bd0d-2274740dca7c",
        "name": "Tastepass Indian Estate",
        "location": "Nashik",
        "email": "badsha.h@rejolut.com",
        "mobile": "+918169057097",
        "deleted": false,
        "appelation": {
            "iso_iwin": "IN201",
            "display_name": "Nashik"
        },
        "country": {
            "name": "India",
            "name_en": "India",
            "iso_iwin": "IN"
        },
        "estateIwinId": "60b37e4e2f5adf0a385e294a",
        "region": {
            "name": "Deccan Plateau",
            "iso_iwin": "IN2"
        }
    },
    {
        "id": "6d048d9f-6691-4bc1-8058-de13ecc12e42",
        "createdAt": "2024-03-13T05:20:06.328Z",
        "organizationId": "87560841-8409-40b4-bd0d-2274740dca7c",
        "name": "Tastepass Indian Estate",
        "location": "Nashik",
        "email": "badsha.h@rejolut.com",
        "mobile": "+918169057097",
        "deleted": false,
        "appelation": {
            "iso_iwin": "IN201",
            "display_name": "Nashik"
        },
        "country": {
            "name": "India",
            "name_en": "India",
            "iso_iwin": "IN"
        },
        "estateIwinId": "60b37e4e2f5adf0a385e294a",
        "region": {
            "name": "Deccan Plateau",
            "iso_iwin": "IN2"
        }
    },
    {
        "id": "d96c6d2e-fcec-49a9-b096-b9eaa77a1d59",
        "createdAt": "2024-03-13T05:23:20.774Z",
        "organizationId": "87560841-8409-40b4-bd0d-2274740dca7c",
        "name": "Tastepass Indian Estate",
        "location": "Nashik",
        "email": "badsha.h@rejolut.com",
        "mobile": "+918169057097",
        "deleted": false,
        "appelation": {
            "iso_iwin": "IN201",
            "display_name": "Nashik"
        },
        "country": {
            "name": "India",
            "name_en": "India",
            "iso_iwin": "IN"
        },
        "estateIwinId": "60b37e4e2f5adf0a385e294a",
        "region": {
            "name": "Deccan Plateau",
            "iso_iwin": "IN2"
        }
    }
]

//   const sortedData = React.useMemo(() => {
//     const sortedArray = [...data];
//     if (sortConfig.key) {
//       sortedArray.sort((a, b) => {
//         const aValue = sortConfig.key.includes('.') ? getValueByNestedKey(a, sortConfig.key)
//           : a.hasOwnProperty(sortConfig.key) ? a[sortConfig.key] : '';
//         const bValue = sortConfig.key.includes('.') ? getValueByNestedKey(a, sortConfig.key)
//           : b.hasOwnProperty(sortConfig.key) ? b[sortConfig.key] : '';
//         // Handle boolean sorting
//         if (typeof aValue === 'boolean' && typeof bValue === 'boolean') {
//           return sortConfig.direction === 'asc' ? (aValue - bValue) : (bValue - aValue);
//         }

//         // Handle number sorting
//         if (typeof aValue === 'number' && typeof bValue === 'number') {
//           return sortConfig.direction === 'asc' ? aValue - bValue : bValue - aValue;
//         }

//         // Handle date sorting (assuming values are in "yyyy-mm-ddThh:mm:ss" format)
//         if (isDateString(aValue) && isDateString(bValue)) {
//           const dateA = new Date(aValue);
//           const dateB = new Date(bValue);
//           if (isNaN(dateA) || isNaN(dateB)) {
//             // Handle invalid date strings by comparing them as strings
//             return sortConfig.direction === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
//           }

//           return sortConfig.direction === 'asc' ? dateA - dateB : dateB - dateA;
//         }
//         // Default to string sorting
//         return sortConfig.direction === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
//       });
//     }
//     return sortedArray;
//   }, [data, sortConfig]);

  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItemsToShow = sortedData.slice(
//     indexOfFirstItem,
//     indexOfLastItem
//   );

  const totalPages = itemsPerPage ? Math.ceil(data.length / itemsPerPage) : 0;

  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);
  console.log("headers:::", headers);
  

  return (
    <div className="bg-bgColor p-3 m-3 rounded-xl shadow-tablerShadow">
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
            {domeyData.map((item, index) => (
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
