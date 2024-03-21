import ChangePassModal from '@/components/CustomChangePasswordModal';
import CustomInput from '@/components/CustomInput';
import ErrorMessage from '@/components/ErrorMessage';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from "yup";


export default function MyProfile() {
    const [profileImage, setProfileImage] = useState<string | null>(null);
    const [isChnagePassModalOpen, setIsChangePassModalOpen] = useState(false);



    const formik = useFormik({
        initialValues: {
          // email: email || "",
          // password: password || "",
          email:  "",
          name: "",
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
            
          name: Yup.string()
            .matches(/^\S*$/, "Spaces are not allowed in the username")
            .matches(
              /^[a-zA-Z][a-zA-Z0-9~!@$&_\-&]*$/,
              "Username must start with a letter and can contain numbers, letters, ~, !, @, $, _, -, or &"
            )
            .min(4, "Username must be at least 4 characters")
            .max(20, "Username must not exceed 20 characters")
            .required("Username is required"),
        }),
        onSubmit: (values) => {
          console.log("values", values);
        },
      });

    //   const  onFileChooser = (id) => {
    //     document.getElementById(id).click();
    //   }

    const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const openChangePassModal = () => {
        setIsChangePassModalOpen(true);
      }
    
      const closeChangePassModal = () => {
        setIsChangePassModalOpen(false);
      }

    return (
        <div className="bg-tableBgColor h-full">
            <p className="font-semibold text-[24px] text-headingColor p-5">My Profile</p>
            <div className="bg-bgColor p-3 rounded-xl shadow-tablerShadow">
                <form onSubmit={formik.handleSubmit}>
                <div className='flex items-center justify-around bg-white rounded py-8'>
                    <div onClick={() => document.getElementById('fileInput')?.click()}>
                            {profileImage ? (
                                <img
                                    src={profileImage}
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
                        <div className="mb-4 flex flex-col">
                            <CustomInput 
                                type='text'
                                title='Name'
                                placeholder='Name'
                                name="name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.name && formik.errors.name ? (
                                <ErrorMessage>{formik.errors.name}</ErrorMessage>
                            ) : null}
                        </div>    
                        <div className="mb-4  flex flex-col ">
                            <CustomInput
                                type='text'
                                // title={t('Email')}
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
                        {/* <CustomButton title='Change password'/>
                        <CustomButton title="Update"/> */}
                        <div 
                            className={`w-[134px] h-[45px] text-primary py-1 px-2 whitespace-nowrap text-[14px] 
                            leading-7 font-semibold flex items-center justify-center
                            text-text-primary bg-[#3b3bf1] hover:bg-[#131b42] border 
                            border-solid border-white border-opacity-40 cursor-pointer rounded bg-background-third`}
                            onClick={openChangePassModal}
                            >
                                Change password
                            </div>
                        <div 
                            className={`w-[134px] h-[45px] text-primary py-1 px-2 whitespace-nowrap text-[14px] 
                            leading-7 font-semibold flex items-center justify-center
                            text-text-primary bg-[#3b3bf1] hover:bg-[#131b42] border 
                            border-solid border-white border-opacity-40 cursor-pointer rounded bg-background-third`}
                            // onClick={() => handleSwitchChain()}
                            >
                                Update
                            </div>
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