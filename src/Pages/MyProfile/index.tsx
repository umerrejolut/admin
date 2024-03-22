import { UpdateProfile } from '@/Common/interface';
import ChangePassModal from '@/components/CustomChangePasswordModal';
import CustomInput from '@/components/CustomInput';
import ErrorMessage from '@/components/ErrorMessage';
import { UPDATE_PROFILE, UPLOAD_PROFILE } from '@/Services/api';
import { store } from '@/store';
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
            email: "",
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
        onSubmit: async (values) => {
          console.log("values", values, loading);
        //   uploadProfile(profileImage)
          updateProfile(values.email)
        //   try {
        //     toast.info("I am callllll")
        //     setLoading(true);
        //     const uploadedImageUrl = await uploadProfile(profileImage);
        //     console.log("uploadedImageUrl",uploadedImageUrl);
            
        //     // Then update profile with email and uploaded image link
        //     await updateProfile(values.email, uploadedImageUrl);
        //     setLoading(false);
        //   } catch (error) {
        //     setLoading(false);
        //     if(isAxiosError(error)){
        //         toast.error(error?.response?.data.message)
        //     }
        //   }
        },
      });

    const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        // const selectedFiles = event.target.files;
        // if(selectedFiles){
        //     const filesArray = Array.from(selectedFiles);
        //     setProfileImage(filesArray);
        //     uploadProfile(filesArray)
        // }
        if (file) {
            // setProfileImage( file);
            // formik.setFieldValue('myfile', file)
            // const reader = new FileReader();
            // reader.onload = (e: any) => {
            //     setProfileImage(e.target.value);
            //     uploadProfile(e.target.value)
            // }
            setProfileImage(file);
            uploadProfile(file)
            // reader.readAsDataURL(file)
            // uploadProfile(file)
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
            // const fileObject = {
            //     fieldname: 'myfile',
            //     originalname: file.name,
            //     encoding: '7bit',
            //     mimetype: file.type,
            //     buffer: file[0],
            //     size: file.size
            // };
                // formData.append('myfile', JSON.stringify(fileObject));
                if(file ){
                    formData.append('myfile', file);
                    console.log("formik.values.myfile", formik.values.myfile);
                    
                }
                // formData.append('myfile', file);
                setLoading(true);
                const response = await UPLOAD_PROFILE(formData);
                setLoading(false);
                updateProfile(formik.values.email, response.data.imageLink);
                return response.data.imageLink; 
        } catch (error) {
            setLoading(false);
            throw error;
        }
    }

    const updateProfile = async (email: string, imageLink?: File) => {
        try {
            setLoading(true);
            const body: UpdateProfile = {
                email: email,
                image_uri: imageLink,
            }
            const response = await UPDATE_PROFILE(body);
            setLoading(false);
            console.log("response::::", response);
        } catch (error) {
            setLoading(false);
            if(isAxiosError(error)){
                toast.error(error?.response?.data.message)
            }
        }
    }
    console.log("formik.values:::::::::::", formik.values)

    return (
        <div className="bg-tableBgColor h-full">
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
                                <div className="w-[124px] h-[124px] cursor-pointer bg-gray-200 flex items-center justify-center rounded-full">
                                    Upload Image
                                </div>
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
                            text-text-primary bg-[#3b3bf1] hover:bg-[#131b42] border 
                            border-solid border-white border-opacity-40 cursor-pointer rounded bg-background-third`}
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