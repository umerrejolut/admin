import { UpdateProfile } from '@/Common/interface';
import ChangePassModal from '@/components/CustomChangePasswordModal';
import CustomInput from '@/components/CustomInput';
import ErrorMessage from '@/components/ErrorMessage';
import { ADMIN_DETAIL, UPDATE_PROFILE, UPLOAD_PROFILE } from '@/Services/api';
import { store } from '@/store';
import { setUserData } from '@/store/userDetail';
import { isAxiosError } from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import * as Yup from "yup";


export default function MyProfile() {
    const [profileImage, setProfileImage] = useState<File | null>(null);
    const [isChnagePassModalOpen, setIsChangePassModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const adminData = store.getState()?.UserData.userData;

    const formik = useFormik({
        initialValues: {
            myfile: adminData?.avatar ? adminData.avatar : null,
            email: "" ,
          },
        enableReinitialize: true,
        validationSchema: Yup.object({
          email: Yup.string()
            .matches(
              /^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+(com|in|co|net|org|info)$/,
              "Invalid domain"
            )
            .max(50, "Email must be at most 50 characters")
            .email("Enter valid Email")
            .required("Email is required"),
            
          
        }),
        onSubmit: async (values, {resetForm}) => {
          console.log("values", values, loading);
        //   uploadProfile(profileImage)
          updateProfile();
          resetForm({
            values: {
              myfile: adminData?.avatar ? adminData.avatar : null,
              email: "",
            },
          });
        },
      });

    const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
            setProfileImage(file);
            uploadProfile(file)
        }
    };

    const openChangePassModal = () => {
        setIsChangePassModalOpen(true);
      }
    
      const closeChangePassModal = () => {
        setIsChangePassModalOpen(false);
      }

    

    console.log("::::::::::::::profileImage:::::::::::", profileImage, );
    // eslint-disable-next-line
    const uploadProfile = async (file: any): Promise<string> => {
        console.log("immmmm::::", file)
        try {
            // eslint-disable-next-line
            const formData: any = new FormData();
                if(file ){
                    formData.append('myfile', file);
                    console.log("formik.values.myfile", formik.values.myfile);
                    
                }
                // formData.append('myfile', file);
                setLoading(true);
                const response = await UPLOAD_PROFILE(formData);
                updateHeaderProfile()
                setLoading(false);
                toast.success(response?.data?.message);
                return response.data.imageLink; 
        } catch (error) {
            setLoading(false);
            throw error;
        }
    }

    const updateProfile = async (imageLink?: File) => {
        try {
            setLoading(true);
            const body: UpdateProfile = {
                email: formik.values.email,
                image_uri: imageLink,
            }
            const response = await UPDATE_PROFILE(body);
            updateHeaderProfile()
            setLoading(false);
            console.log("response::::", response);
            toast.success(response?.data?.message);
        } catch (error) {
            setLoading(false);
            if(isAxiosError(error)){
                toast.error(error?.response?.data.message)
            }
        }
    }

    const updateHeaderProfile = async () => {
        try {
          setLoading(true);
          const data = await ADMIN_DETAIL();
          console.log(data?.data);
          store.dispatch(setUserData(data.data));
          setLoading(false);
        } catch (error) {
          if(isAxiosError(error)){
            toast.error(error?.response?.data?.message);
          }
        }
      }

    return (
        <div className="bg-tableBgColor h-[92%]">
            <p className="font-semibold text-[24px] text-headingColor p-5">My Profile</p>
            <div className="bg-bgColor p-3 rounded-xl shadow-tablerShadow">
                <form onSubmit={formik.handleSubmit}>
                <div className='flex items-center justify-around bg-white rounded py-8'>
                    <div onClick={() => document.getElementById('fileInput')?.click()}>
                            {profileImage ? (
                                <img
                                    src={ URL.createObjectURL(profileImage)} // Use createObjectURL to display selected image
                                    alt='profile'
                                    className='w-[124px] h-[124px] cursor-pointer rounded-full'
                                />
                            ) : (
                                // <div className="w-[124px] h-[124px] cursor-pointer bg-gray-200 flex items-center justify-center rounded-full">
                                //     Upload Image
                                // </div>
                                <img
                                src={adminData?.avatar} // Use createObjectURL to display selected image
                                alt='profile'
                                className='w-[124px] h-[124px] cursor-pointer rounded-full'
                            />
                            )}
                        </div>
                        <input
                            id="fileInput"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={onFileChange}
                        />
                    <div className='flex flex-col items-end'>
                        <div className='flex gap-8'>
                        <div className="mb-4  flex flex-col ">
                            <CustomInput
                                type='text'
                                title='Email'
                                placeholder="Email"
                                name="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email ? (
                              <ErrorMessage>{formik.errors.email}</ErrorMessage>
                            ) : null}
                        </div>
                        </div>
                        <div className='flex gap-3'>
                        <div 
                            className={`w-[134px] h-[45px] text-primary py-1 px-2 whitespace-nowrap text-[14px] 
                            leading-7 font-semibold flex items-center justify-center
                            text-text-primary bg-[#3b3bf1] hover:bg-[#131b42] border 
                            border-solid border-white border-opacity-40 cursor-pointer rounded bg-background-third`}
                            onClick={openChangePassModal}
                            >
                                Change password
                            </div>
                        <button
                            type="submit"
                            className={`w-[134px] h-[45px] text-primary py-1 px-2 whitespace-nowrap text-[14px] 
                            leading-7 font-semibold flex items-center justify-center
                            text-text-primary bg-[#3b3bf1]  hover:bg-[#131b42] border 
                            ${formik.values.email === adminData?.email || !formik.values.email ? 
                                "!bg-checkBoxBorder hover:bg-modalBorder" :
                                "bg-[#3b3bf1]"
                            }
                            border-solid border-white border-opacity-40 cursor-pointer rounded bg-background-third`}
                            disabled={formik.values.email === adminData?.email || !formik.values.email}
                            >
                                Update
                        </button>
                        </div>
                    </div>
                </div>
                </form>  
                <ChangePassModal
                    isOpen={isChnagePassModalOpen}
                    closeModal={closeChangePassModal}
                    profile={true}
                />
            </div>
        </div>
    )
}