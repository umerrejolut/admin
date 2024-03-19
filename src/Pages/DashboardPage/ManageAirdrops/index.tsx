import { Row } from "@/Common/interface";
import { CustomAddAridrop } from "@/components/CustomAddAirdrop";
import CustomButton from "@/components/CustomButton";
import CustomTable from "@/components/CustomTable";
import { MATRIX } from "@/Services/api";
import { isAxiosError } from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function ManageAirdropsPage(){
    // const [estateList, setEstateList] = useState([]);
    const [openAirdrop, setOpenAirdrop] = useState(false);
    const [loading, setLoading] = useState(false);
    // interface Row {
    //   name: string;
    //   location: string;
    //   createdAt: string;
    //   email: string;
    //   // Define other properties as needed
    // }

    const [itemsPerPage] = useState(10);
    const headers = [
        // {
        //   key: "no",
        //   label: t("Sr_No"),
        //   sortable: false,
        //   render: (row: any, i: any, sr:any) => (
        //     <div className="flex flex-row items-center justify-center">{sr}</div>
        //   ),
        // },
        {
          key: "username",
         label: "UserName",
         sortable: true,
         render: (row: Row) => (
            <div className="flex gap-2 inline-block text-center max-w-[100%] overflow-hidden whitespace-nowrap text-ellipsis">
              {/* {row && row.name} */}
              <button className="bg-red-100" onClick={()=>console.log(row)}>Update </button>
              <button className="bg-green-100">delete</button>

            </div>
         )
        },
        {
          key: "name",
          label: "Wallet Address",
          sortable: true,
          render: (row: Row) => (
            <div className="inline-block text-center max-w-[100%] overflow-hidden whitespace-nowrap text-ellipsis">
              {row && row.name}
            </div>
          ),
        },
        {key: "email",
         label: "Shards",
         sortable: true,
        //  render: (row: Row) => (
        //     <div className="inline-block text-center max-w-[100%] overflow-hidden whitespace-nowrap text-ellipsis">
        //       {row && row.location}
        //     </div>
        //  )
        },
        {key: "timestamp",
         label: "Time Stamp",
         sortable: true,
         render: (row: Row) => (
            <div className="inline-block text-center max-w-[100%] overflow-hidden whitespace-nowrap text-ellipsis">
              {row && row.createdAt}
            </div>
         )
        },
        {key: "description",
         label: "Description",
         sortable: true,
         render: (row: Row) => (
            <div className="inline-block text-center max-w-[100%] overflow-hidden whitespace-nowrap text-ellipsis">
              {row && row.email}
            </div>
         )
        },
      ];

      const handleOpenAddAirdrop = () => {
        setOpenAirdrop(!openAirdrop);
      }

      const estateList = [
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

    const matrix = async () => {
      try {
        setLoading(true);
        const response = await MATRIX();
        console.log("response::::::", response);
        setLoading(false);
      } catch (error) {
        if(isAxiosError(error)){
          toast.error(error?.response?.data?.message);
        }
      }
    }

    useEffect(() => {
      matrix();
    },[])
    console.log("loading", loading);
    
    return (
        <div className="bg-tableBgColor h-full">
          {/* <Loader loading={isLoading} /> */}
          <div className="flex flex-row items-center justify-between mr-[64px] pt-5">
            <div className=" w-[300px]rounded p-6 shadow-md border-2 border-solid border-gray-400 border-lightprimary relative top-8 left-8 height-full text-center">
                <h2 className="font-medium text-lg text-headingColor">Total Shards Airdropped</h2>
                <p className="font-bold text-[24px] text-headingColor">11,236</p>
            </div>

            <div className="w-[300px] rounded p-6 shadow-md border-2 border-solid border-gray-400 border-lightprimary relative top-8 left-8 height-full text-center">
                <h2 className="font-medium text-lg text-headingColor">Total Airdropped Users</h2>
                <p className="font-bold text-[24px] text-headingColor">7373</p>
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
          <div>
            <CustomTable
              data={estateList}
              headers={headers}
              itemsPerPage={itemsPerPage}
            />
          </div>
          {openAirdrop && <CustomAddAridrop handleOpenAddAirdrop={handleOpenAddAirdrop} />}
        </div>
      );
}

export default ManageAirdropsPage;