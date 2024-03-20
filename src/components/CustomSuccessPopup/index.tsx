import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import CustomButton from "../CustomButton";
import { isAxiosError } from "axios";
import { toast } from "react-toastify";
import { ADD_AIRDROP_USER } from "@/Services/api";
import { Detail } from "@/Common/interface";


interface ConfirmSuccessModalProps {
    isOpen: boolean;
    closeModal: () => void;
    userLength: number;
    totalShards: number;
    tableDetails: Detail[];
    handleOpenAddAirdrop: () => void;
    getAirdropTable: () => void;
}

export default function ConfirmSuccessModal({ isOpen, closeModal, userLength, totalShards, tableDetails, handleOpenAddAirdrop, getAirdropTable  }: ConfirmSuccessModalProps) {
    const [loading, setLoading] = useState(false);

    const approveUser = async() => {
        try {
            setLoading(true);
            // const payload = JSON.stringify(tableDetails);
            const formattedData = tableDetails.map(item => ({
              wallet_address: item.wallet_address,
              description: item.description || "airdrop", // Default value if description is not provided
              value: parseInt(item.value) || 0 // Convert value to integer, default to 0 if not provided
          }));
            const response = await ADD_AIRDROP_USER( {"airdropData":formattedData} );
            console.log("RESponse::::", response.data)
            toast.success("Airdrop Added Successfully")
            getAirdropTable()
            closeModal()
            handleOpenAddAirdrop()
            setLoading(false);
        } catch (error) {
            if(isAxiosError(error)){
                toast.error(error?.response?.data?.message)
            }
        }
    }

    console.log("loading:::::", loading);
    
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => {
            closeModal();
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[60%] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex items-end justify-between">
                    <div>
                    <p className="font-medium text-lg text-headingColor">Confirmation</p>

                    <p className="font-medium text-lg text-headingColor mt-5">Total shards to be distributed: {totalShards}</p>
                    <p className="font-medium text-lg text-headingColor mb-5">Total Wallet Selected: {userLength}</p>
                    <p className="font-medium text-lg text-headingColor">Confirm Airdrop?</p>
                  </div>
                  <div className="flex gap-3">
                    <CustomButton title="Cancle" onClick={closeModal} />
                    <CustomButton title="Approve" onClick={approveUser} />
                  </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
