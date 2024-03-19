import { CloseSvgModal } from "@/assets/svg";
import classNames from "classnames";
import { useState } from "react";
import CustomInput from "../CustomInput";

interface CustomAddAridropProps {
  handleOpenAddAirdrop: () => void;
}

interface Detail {
  username: string;
  walletAddress: string;
  shards: string;
  description: string;
}

export const CustomAddAridrop = ({handleOpenAddAirdrop}: CustomAddAridropProps) => {
    // const [currentPage, setCurrentPage] = useState(1);
    const [details, setDetails] = useState<Detail[]>([]);


  //   let domeyData: {
  //     createdAt: string;
  //     name: string;
  //     location: string;
  //     email: string;
  // }[]

  //     domeyData = [
  //       {
  //           "createdAt": "2024-03-07T12:09:06.089Z",
  //           "name": "Tastepass Indian Estate",
  //           "location": "Nashik",
  //           "email": "badsha.h@rejolut.com",
  //       },
  //       {
  //           "createdAt": "2024-03-13T05:17:59.801Z",
  //           "name": "Tastepass Indian Estate",
  //           "location": "Nashik",
  //           "email": "badsha.h@rejolut.com",
  //       },
  //       {
  //           "createdAt": "2024-03-13T05:19:26.506Z",
  //           "name": "Tastepass Indian Estate",
  //           "location": "Nashik",
  //           "email": "badsha.h@rejolut.com",
  //       },
  //       {
  //           "createdAt": "2024-03-13T05:20:06.328Z",
  //           "name": "Tastepass Indian Estate",
  //           "location": "Nashik",
  //           "email": "badsha.h@rejolut.com",
  //       },
  //       {
  //           "createdAt": "2024-03-13T05:23:20.774Z",
  //           "name": "Tastepass Indian Estate",
  //           "location": "Nashik",
  //           "email": "badsha.h@rejolut.com",
  //       }
  //   ]

    // const [itemsPerPage] = useState(10);
    // const indexOfLastItem = currentPage * itemsPerPage;
    // const handlePageChange = (pageNumber: any) => setCurrentPage(pageNumber);

    const handleAddDetail = () => {
        // Function to add a new row of detail
        const newDetail = {
          username: '',
          walletAddress: '',
          shards: '',
          description: '',
        };
        setDetails([...details, newDetail]);
      };

    const handleInputChange = (index: number, key: keyof Detail, value: string) => {
        // Function to handle input changes for a specific row
        const updatedDetails = [...details];
        updatedDetails[index][key] = value;
        setDetails(updatedDetails);
      };

    return (
      <div className="fixed top-0 left-0 w-full h-[100%] flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
        <div className="bg-[#f5f5dc] p-8 rounded shadow-lg w-[700px] h-[80vh] flex text-center items-center justify-start flex-col gap-7">
            <div className="flex items-center justify-between w-[100%]"> 
                <p className='text-text-primary font-bold text-[18px]'>New AirDrops</p>
                <button
                    onClick={() => {
                        handleOpenAddAirdrop();
                    }}
                    className="text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-0 p-2"
                >
                    <CloseSvgModal />
                </button>
            </div>

            <div className="overflow-scroll">
                <div className="bg-white p-4">
                  <table className="table-fixed w-full">
                    <thead className="bg-headerBg h-[32px]">
                      <tr className="h-[100%]">
                <th
                  className={classNames(
                    "px-4 py-2 cursor-pointer text-labelColor text-headerText font-normal"
                  )}
                //   onClick={() => sortData(header.key)}
                >
                  <div className="flex items-center justify-center gap-1 w-full">
                    User Name
                  </div>
                </th>
                <th
                  className={classNames(
                    "px-4 py-2 cursor-pointer text-labelColor text-headerText font-normal"
                  )}
                //   onClick={() => sortData(header.key)}
                >
                  <div className="flex items-center justify-center gap-1 w-full">
                    Wallet Address
                  </div>
                </th>
                <th
                  className={classNames(
                    "px-4 py-2 cursor-pointer text-labelColor text-headerText font-normal"
                  )}
                >
                  <div className="flex items-center justify-center gap-1 w-full">
                    Shards
                  </div>
                </th>
                <th
                  className={classNames(
                    "px-4 py-2 cursor-pointer text-labelColor text-headerText font-normal"
                  )}
                //   onClick={() => sortData(header.key)}
                >
                  <div className="flex items-center justify-center gap-1 w-full">
                    Description
                  </div>
                </th>
                      </tr>
                    </thead>
                    <tbody>
          
                      {details.map((detail, index) => (
                      <tr key={index}>
                        <td>
                          <CustomInput
                          type="text"
                          value={detail.username}
                          onChange={(e) => 
                              handleInputChange(index, 'username', e.target.value)
                          }
                          // className="w-full"
                          />
                        </td>
                        <td>
                          <CustomInput
                          type="number"
                          value={detail.walletAddress}
                          onChange={(e) => 
                              handleInputChange(index, 'walletAddress', e.target.value)
                          }
                          />
                        </td>
                        <td>
                          <CustomInput
                          type="number"
                          value={detail.shards}
                          onChange={(e) => 
                              handleInputChange(index, 'shards', e.target.value)
                          }
                          />
                        </td>
                        <td>
                          <CustomInput
                          type="text"
                          value={detail.description}
                          onChange={(e) => 
                              handleInputChange(index, 'description', e.target.value)
                          }
                          />
                        </td>
                      </tr>
                    ))}
                    </tbody>
                  </table>
                  <button onClick={handleAddDetail} className="mt-4">
                    <p className="text-2xl md:text-3xl lg:text-4xl font-semibold lg:text-[#202020] text-[#989898] w-9 h-9 flex items-center justify-center rounded bg-headerBg border-solid border-[#202020] hover:bg-[#202020] hover:text-white">
                        +
                    </p> 
                  </button>
                 </div>

                 <p>
                    OR
                 </p>

                 <div className="mt-12">
                    {/* <CustomButton title="Upload a CSV" loading={buttonIsLoading} /> */}
                 </div>

                 <div className="mt-12">
                    {/* <CustomButton title="AirDrop!" loading={buttonIsLoading} /> */}
                 </div>
            </div>
        </div>
      </div>
    )
  }