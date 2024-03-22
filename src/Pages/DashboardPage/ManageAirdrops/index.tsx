import { SearchIcon } from "@/assets/svg";
import { AirdropTable, MatrixData, Row, WalletType } from "@/Common/interface";
import { CustomAddAridrop } from "@/components/CustomAddAirdrop";
import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import CustomTable from "@/components/CustomTable";
import { Loader } from "@/components/Loader";
import { AIRDROP_TRANSACTIONS, MATRIX, SEARCH_WALLETADDRESS } from "@/Services/api";
import { shortenAddress } from "@/Utils/helper";
import { isAxiosError } from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import moment from 'moment';

function ManageAirdropsPage(){
    const [airdropUserList, setAirdropUserList] = useState([]);
    const [openAirdrop, setOpenAirdrop] = useState(false);
    const [loading, setLoading] = useState(false);
    const [matrixValue, setMatrixValue] = useState<MatrixData>();
    const [searchAddress, setSearchAddress] = useState([])
    const [keyWords,setKeyWords] = useState<string>();
    const [inputValue, setInputValue] = useState<string>('');
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

    const [itemsPerPage] = useState(4);
    const headers = [
        {
         key: "username",
         label: "UserName",
         sortable: true,
         render: (row: Row) => (
            <div className="gap-2 inline-block text-center max-w-[100%] overflow-hidden whitespace-nowrap text-ellipsis">
              {row && row.users.user_name}
              {/* <button className="bg-red-100" onClick={()=>console.log(row)}>Update </button>
              <button className="bg-green-100">delete</button> */}
            </div>
         )
        },
        {
          key: "name",
          label: "Wallet Address",
          sortable: true,
          render: (row: Row) => (
            <div className="inline-block text-center max-w-[100%] overflow-hidden whitespace-nowrap text-ellipsis">
              {/* {row && row.users.Wallets[0].wallet_address} */}
              {shortenAddress(row.users.Wallets[0].wallet_address ?? "" , 4)}
            </div>
          ),
        },
        {key: "email",
         label: "Shards",
         sortable: true,
         render: (row: Row) => (
            <div className="inline-block text-center max-w-[100%] overflow-hidden whitespace-nowrap text-ellipsis">
              {row && row.value}
            </div>
         )
        },
        {key: "timestamp",
         label: "Time Stamp",
         sortable: true,
         render: (row: Row) => (
            <div className="inline-block text-center max-w-[100%] overflow-hidden whitespace-nowrap text-ellipsis">
              {/* {row && row.created_at} */}
              {moment(row && row.created_at).format("MM/DD/YYYY hh:mm")}
            </div>
         )
        },
        {key: "description",
         label: "Description",
         sortable: true,
         render: (row: Row) => (
            <div className="inline-block text-center max-w-[100%] overflow-hidden whitespace-nowrap text-ellipsis" onClick={() => console.log(row.description)}>
              {row && row.description}
            </div>
         )
        },
      ];

      const handleOpenAddAirdrop = () => {
        setOpenAirdrop(!openAirdrop);
      }

    const matrix = async () => {
      try {
        setLoading(true);
        const response = await MATRIX();
        setMatrixValue(response?.data);
        setLoading(false);
      } catch (error) {
        if(isAxiosError(error)){
          toast.error(error?.response?.data?.message);
        }
      }
    }

    const getAirdropTable = async (selectedValue?: string) => {
      try {
        const body: AirdropTable = {
          wallet_address:  selectedValue ? selectedValue : "",
          // ...(inputValue && { wallet_address: inputValue }),
          limit: 10,
          offset: 0,
        };
        setLoading(true);
        const response = await AIRDROP_TRANSACTIONS(body);
        setAirdropUserList(response.data.history);
        setLoading(false);
      } catch (error) {
        if (isAxiosError(error)) {
          toast.error(error?.response?.data?.message);
        }
      }
    };

    const handleAddressSearch = async (keyWords: string) => {
      setKeyWords(keyWords)
      try {
        // setLoading(true);
        const body: WalletType = {
          // wallet_address: selectAddress ? selectAddress : "",
        }
        const response = await SEARCH_WALLETADDRESS(body);
        console.log(response.data);
        setSearchAddress(response.data)
        setDropdownOpen(true);
        // setLoading(false);
      } catch (error) {
        if(isAxiosError(error)){
          toast.error(error?.response?.data?.message);
        }
      }
    }

    const handleInputChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setInputValue(value);
  
      // Assuming you have a function to call your API
      // Replace 'callYourAPIFunction' with your actual API call function
      handleAddressSearch(value);
    };

    useEffect(() => {
      matrix();
      getAirdropTable();
    },[])

    const handleDropdownSelect = (selectedValue: string) => {
      setInputValue(selectedValue);
      setDropdownOpen(false);
      getAirdropTable(selectedValue);
    };
    
    return (
      <>
      {loading ? <Loader/> : 
        <div className="bg-tableBgColor h-full">
          {/* <Loader loading={isLoading} /> */}
          <div className="flex flex-row items-center justify-between mr-[64px] pt-5">
            <div className=" w-[300px]rounded p-6 shadow-md border-2 border-solid border-gray-400 border-lightprimary relative top-8 left-8 height-full text-center">
                <h2 className="font-medium text-lg text-headingColor">Total Shards Airdropped</h2>
                <p className="font-bold text-[24px] text-headingColor">{matrixValue?.airdroppedUsers}</p>
            </div>

            <div className="w-[300px] rounded p-6 shadow-md border-2 border-solid border-gray-400 border-lightprimary relative top-8 left-8 height-full text-center">
                <h2 className="font-medium text-lg text-headingColor">Total Airdropped Users</h2>
                <p className="font-bold text-[24px] text-headingColor">{matrixValue?.totalAirdropped?._sum?.value ? matrixValue?.totalAirdropped?._sum?.value : "0"}</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between mx-8 mt-[48px]">
            <h2 className="font-bold text-lg text-headingColor">
              {" "}
              Airdrop Transactions History
            </h2>
            <div className="flex flex-row items-center justify-between gap-6">
              <div className="min-w-max">
                <CustomButton
                  title={"Add New AirDrop"}
                //   onClick={() => navigate("/dashboard/manage-estate/create")}
                onClick={handleOpenAddAirdrop}
                />
              </div>
            </div>
          </div>
          <div className=" flex w-[40%] mx-8">
            <div className="relative flex">

            <CustomInput
              type="search"
              value={inputValue}
              onChange={handleInputChange}
            />
              <button className="ml-2" 
              // onClick={getAirdropTable}
              >
                <SearchIcon/>
              </button>
              </div>
              {dropdownOpen && keyWords ? (
                <div className="flex flex-col items-center gap-1 bg-[#2c2a2a] w-[27%] h-[300px] overflow-scroll absolute p-2 rounded-md shadow-md bottom-0">
                  {searchAddress.map((item: string, index: number) => (
                    <div className="flex items-center justify-center gap-1 w-full text-primary p-2 ml-3 text-[12px] cursor-pointer" 
                    key={index} 
                    onClick={() => {
                      handleDropdownSelect(item);
                      setKeyWords("")
                    }}
                    >
                      {item}
                    </div>
                  ))
                }
                </div>): null
              }
          </div>
          <div>
            <CustomTable
              data={airdropUserList}
              headers={headers}
              itemsPerPage={itemsPerPage}
            />
          </div>
          {openAirdrop && <CustomAddAridrop handleOpenAddAirdrop={handleOpenAddAirdrop} getAirdropTable={getAirdropTable}/>}
        </div>
        }
      </>
      );
}

export default ManageAirdropsPage;