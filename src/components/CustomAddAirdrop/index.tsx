import { CloseSvgModal } from "@/assets/svg";
import classNames from "classnames";
import { useEffect, useState } from "react";
import CustomInput from "../CustomInput";
import { isAxiosError } from "axios";
import { toast } from "react-toastify";
import { SEARCH_WALLETADDRESS } from "@/Services/api";
import { Detail, WalletType } from "@/Common/interface";
import CustomButton from "../CustomButton";
import ConfirmSuccessModal from "../CustomSuccessPopup";
import Papa from 'papaparse';

interface CustomAddAridropProps {
  handleOpenAddAirdrop: () => void;
  getAirdropTable: () => void;
}



export const CustomAddAridrop = ({handleOpenAddAirdrop, getAirdropTable}: CustomAddAridropProps) => {
    // const [currentPage, setCurrentPage] = useState(1);
    const [details, setDetails] = useState<Detail[]>([]);
    const [loading, setLoading] = useState(false);
    const [searchAddress, setSearchAddress] = useState([]);
    const [selectAddress, setSelectAddress] = useState<string>();
    const [openConfirmPopup, setOpenConfirmPopup] = useState(false);
    // const [addressSet, setAddressSet] = useState<string[]>([]);
    const [keyWords, setKeyWords] = useState<string>();

    const handleAddDetail = () => {
        // Function to add a new row of detail
        const newDetail = {
          wallet_address:'',
          value: '',
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

      const handleAddressSearch = async (keyWords: string) => {
        setKeyWords(keyWords)
        try {
          setLoading(true);
          const body: WalletType = {
            // wallet_address: selectAddress ? selectAddress : "",
          }
          const response = await SEARCH_WALLETADDRESS(body);
          console.log(response.data);
          setSearchAddress(response.data)
          setLoading(false);
        } catch (error) {
          if(isAxiosError(error)){
            toast.error(error?.response?.data?.message);
          }
        }
      }

      const handleConfirmPopup = () => {
        setOpenConfirmPopup(true)
      }

      const closeConfirmModal = () => {
        setOpenConfirmPopup(false)
      }

      console.log("searchAddress:::", searchAddress, selectAddress, openConfirmPopup)

      console.log("details::", details);

    const totalShards = details.reduce((acc, curr) => acc + parseInt(curr.value), 0);
    const userLength = details.length;
    
    console.log("keyWords", keyWords, loading)
    useEffect(() => {
      handleAddDetail();
    }, []);

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files[0];
      const userLength = details.length;
      Papa.parse(file,{
        header: true,
        // eslint-disable-next-line
        complete:(results: any) => {          
          // setDetails(results.data)
          if(userLength > 1){
            setDetails([...details, ...results.data])
          }else{
            setDetails(results.data);
          }
        }
      })
    };
        
    return (
      <div className="fixed top-0 left-0 w-full h-[100%] flex items-center justify-center bg-gray-800 bg-opacity-50">
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
          
                     {/* eslint-disable-next-line */}
                      {details.map((detail: any, index: number) => (
                      <tr key={index}>
                        
                        <td>
                          <CustomInput
                          type="search"
                          value={detail.wallet_address}
                          // value={detail == "" ? "" : typeof detail == "object" ? detail.walletAddress : detail}
                          // value={typeof detail === "object" ? detail.walletAddress : detail}
                          onChange={(e) => {
                            handleAddressSearch(e.target.value);
                            handleInputChange(index, 'wallet_address', e.target.value)
                            
                          }}
                          />   
                          {keyWords ? 
                          (
                          <div className="flex flex-col items-center gap-1 bg-[#2c2a2a] w-[27%] h-[300px] overflow-scroll absolute p-2 rounded-md shadow-md">
                            {searchAddress && searchAddress.map((address: string, idx: number) => (
                              <div className="flex items-center justify-center gap-1 w-full text-primary p-2 ml-3 text-[12px] cursor-pointer" 
                              key={idx} 
                              onClick={(e) => {
                                setSelectAddress(address), 
                                setKeyWords("");  
                                handleInputChange(index, 'wallet_address', address);
                                e.preventDefault();
                              }}
                              >
                                {address}
                              </div>
                            ))
                          }
                          </div>): null
                          }                       
                        </td>
                        <td>
                          <CustomInput
                          type="number"
                          value={detail.value}
                          onChange={(e) => 
                              handleInputChange(index, 'value', e.target.value)
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
                  <button 
                  onClick={handleAddDetail} 
                  className="mt-4">
                    <p className="text-2xl md:text-3xl lg:text-4xl font-semibold lg:text-[#202020] text-[#989898] w-9 h-9 flex items-center justify-center rounded bg-headerBg border-solid border-[#202020] hover:bg-[#202020] hover:text-white">
                        +
                    </p> 
                  </button>
                </div>

                <p className="my-5">
                  OR
                </p>
                <div className="my-5 mx-auto w-[60%]">
                   {/* <CustomButton title="Upload a CSV" onClick={() => handleFileUpload} /> */}
                    <label htmlFor="csvUpload" className="cursor-pointer">
                      <p className={`py-2 px-4 text-white font-bold rounded hover:bg-[#131b42] bg-buttonBg
                            `}>
                        Upload a CSV
                      </p>
                      <input
                        id="csvUpload"
                        type="file"
                        accept=".csv"
                        onChange={ handleFileUpload}
                        style={{ display: 'none' }}
                      />
                    </label>
                </div>
                <div className="my-5 mx-auto w-max">
                  <CustomButton title="AirDrop!" onClick={() => {handleConfirmPopup()}} 
                  // disabled={!selectAddress ? true : false}
                  />
                </div>
            </div>
            <ConfirmSuccessModal 
              isOpen={openConfirmPopup}
              closeModal={closeConfirmModal}
              totalShards={totalShards ? totalShards : 0}
              userLength={userLength}
              tableDetails = {details}
              handleOpenAddAirdrop = {handleOpenAddAirdrop}
              getAirdropTable={getAirdropTable}
            />
        </div>
      </div>
    )
  }