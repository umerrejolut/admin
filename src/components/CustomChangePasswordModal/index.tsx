import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import CustomInput from "../CustomInput";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import * as Yup from "yup";
// import { CHANGE_ORG_PASSWORD, CHANGE_PASSWORD } from "../../services/api";
import ErrorMessage from "../ErrorMessage";
// import cookieStorage from "../../services/cookie-storage";
import { ClosedEyeSvgIcon, CloseSvgModal, EyeSvgIcon } from "@/assets/svg";
import { isAxiosError } from "axios";
import { toast } from "react-toastify";
import CustomButton from "../CustomButton";
import { CHANGE_PASSWORD, PROFILE_CHANGE_PASSWORD } from "@/Services/api";
import { ChangeNewPasswordData, ChangeProfilePasswordData } from "@/Common/interface";

interface ChangePassModalProps {
    isOpen: boolean;
    closeModal: () => void;
    profile: boolean;
}

export default function ChangePassModal({ isOpen, closeModal, profile }: ChangePassModalProps) {
  const { t } = useTranslation();
  const navigation = useNavigate();
  const [buttonIsLoading, setButtonIsLoading] = useState(false);

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    validationSchema: Yup.object({
      oldPassword: Yup.string().required("Password is Required"),
      newPassword: Yup.string()
        .min(4, "Password must be minimum 4 characters")
        .required("New Password is Required"),
      confirmNewPassword: Yup.string()
        // .oneOf([Yup.ref("newPassword"), null], t("passwordsMustMatch"))
        .oneOf([Yup.ref("newPassword")], t("passwordsMustMatch"))
        .min(4, "Password must be minimum 4 characters")
        .required("Confirm Password is Required"),
    }),

    onSubmit: () => {
      chnagePassword();
    },
  });

  const chnagePassword = async () => {
    try {
      setButtonIsLoading(true);
      let body;
      if (profile) {
        body = {
          old_password: formik.values.oldPassword,
          new_password: formik.values.newPassword,
          confirm_new_password: formik.values.confirmNewPassword,
        } as  ChangeProfilePasswordData;
      } else {
        body = {
          new_password: formik.values.newPassword,
          confirm_new_password: formik.values.confirmNewPassword,
        } as ChangeNewPasswordData;
      }
    let data;
    if(profile){
      data = await PROFILE_CHANGE_PASSWORD(body)
    }else{
      data = await CHANGE_PASSWORD(body);
    }
    console.log("data", data);
    !profile && navigation("/");
      toast.success("Successfully changed password");
      formik.resetForm();
      closeModal();
    } catch (error) {
        if(isAxiosError(error)){
            toast.error(error?.response?.data?.message);
          }
    } finally {
      setButtonIsLoading(false);
    }
  };
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => {
            formik.resetForm();
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
                <Dialog.Panel className="w-full max-w-xs transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-between">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 items-center flex justify-between w-full "
                    >
                      {t("Change_Password")}
                      <button
                        onClick={() => {
                          formik.resetForm();
                          closeModal();
                        }}
                        className="text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-0 p-2"
                      >
                        <span className="sr-only">{t("Close")}</span>
                        <CloseSvgModal />
                      </button>
                    </Dialog.Title>
                  </div>
                  <form className="-top-20" onSubmit={formik.handleSubmit}>
                    <div className="mt-2 w-full items-center flex flex-col justify-center">
                      {/* {profile &&  */}
                      <div className="mb-4 w-full">
                        <CustomInput
                          type={showOldPassword ? "text" : "password"}
                          title={t("Old_Password")}
                          placeholder={t("Enter_here")}
                          name="oldPassword"
                          value={formik.values.oldPassword}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          rightPart={
                            <span
                              onClick={() =>
                                setShowOldPassword(
                                  (prevShowOldPassword) => !prevShowOldPassword
                                )
                              }
                            >
                              {showOldPassword ? (
                                <EyeSvgIcon />
                              ) : (
                                <ClosedEyeSvgIcon />
                              )}
                            </span>
                          }
                        />
                        {formik.touched.oldPassword &&
                        formik.errors.oldPassword ? (
                          <ErrorMessage>
                            {formik.errors.oldPassword}
                          </ErrorMessage>
                        ) : null}
                      </div>
                      {/* } */}
                      <div className="mb-4 w-full">
                        <CustomInput
                          type={showNewPassword ? "text" : "password"}
                          title={t("New_Password")}
                          placeholder={t("Enter_here")}
                          name="newPassword"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.newPassword}
                          rightPart={
                            <span
                              onClick={() =>
                                setShowNewPassword(
                                  (prevShowNewPassword) => !prevShowNewPassword
                                )
                              }
                            >
                              {showNewPassword ? (
                                <EyeSvgIcon />
                              ) : (
                                <ClosedEyeSvgIcon />
                              )}
                            </span>
                          }
                        />
                        {formik.touched.newPassword &&
                        formik.errors.newPassword ? (
                          <ErrorMessage>
                            {formik.errors.newPassword}
                          </ErrorMessage>
                        ) : null}
                      </div>
                      <div className="mb-4 w-full">
                        <CustomInput
                          type={showConfirmPassword ? "text" : "password"}
                          title={t("Confirm_Password")}
                          placeholder={t("Enter_here")}
                          name="confirmNewPassword"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.confirmNewPassword}
                          rightPart={
                            <span
                              onClick={() =>
                                setShowConfirmPassword(
                                  (prevShowConfirmPassword) =>
                                    !prevShowConfirmPassword
                                )
                              }
                            >
                              {showConfirmPassword ? (
                                <EyeSvgIcon />
                              ) : (
                                <ClosedEyeSvgIcon />
                              )}
                            </span>
                          }
                        />
                        {formik.touched.confirmNewPassword &&
                        formik.errors.confirmNewPassword ? (
                          <ErrorMessage>
                            {formik.errors.confirmNewPassword}
                          </ErrorMessage>
                        ) : null}
                      </div>
                      <div className="w-full">
                        <CustomButton
                          title={t("Submit")}
                          loading={buttonIsLoading}
                        />
                      </div>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
