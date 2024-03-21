import { SignUpData } from '@/Common/interface';
import { LOGIN } from '@/Services/api';
import { IMAGES } from '@/assets/images';
import { ClosedEyeSvgIcon, EyeSvgIcon } from '@/assets/svg';
import CustomButton from '@/components/CustomButton';
import ChangePassModal from '@/components/CustomChangePasswordModal';
import CustomInput from '@/components/CustomInput';
import ErrorMessage from '@/components/ErrorMessage';
import { store } from '@/store';
import { setAuthToken } from '@/store/authToken';
import { setUserData } from '@/store/userDetail';
import { isAxiosError } from 'axios';
import { useFormik } from 'formik';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import * as Yup from "yup";

function LoginPage() {
  // const { t } = useTranslation();
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const [buttonIsLoading, setButtonIsLoading] = useState(false);
    const [isChnagePassModalOpen, setIsChangePassModalOpen] = useState(false);
    const navigation = useNavigate()
    // const { mutate, isPending } = useMutation({
    //     mutationFn: (data: SignUpData) => LOGIN(data),
    //     onSuccess: data => {
    //       console.log('response', data);
    //     },
    //     onError: error => {
    //       console.log(error);
    //     },
    //   });
    const [showPassword, setShowPassword] = useState(false);
    
const formik = useFormik({
    initialValues: {
      // email: email || "",
      // password: password || "",
      email:  "",
      password: "",
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is Required"),
      password: Yup.string().required("Password is Required"),
    }),
    onSubmit: (values) => {
      login();
      console.log("values", values);
    },
  });

  const login = async () => {
    console.log('function Run');

    try {
      setButtonIsLoading(true);
      const body: SignUpData = {
        password: formik.values.password,
        email: formik.values.email,
      };
      const data = await LOGIN(body);
      console.log('data', data);
      // if (data?.data?.accessToken) {
      //   localStorage.setItem('accessToken', data.data.accessToken);
      //   localStorage.setItem('payload', JSON.stringify(data.data.payload));
      // }      
      store.dispatch(setAuthToken(data.data.accessToken));
      store.dispatch(setUserData(data.data.payload));
      toast.success('Successfully Logged In ');
      // window.location.href = '/dashboard';
      navigation("dashboard/manage-airdrops")
    } catch (error) {
      if(isAxiosError(error)){
        toast.error(error?.response?.data?.message);
      }
    } finally {
      setButtonIsLoading(false);
    }
  };

  const token = store.getState()?.AuthToken?.authToken;
  if (token) {
    return <Navigate to={"dashboard/manage-airdrops"} />;
  }


  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const openChangePassModal = () => {
    setIsChangePassModalOpen(true);
  }

  const closeChangePassModal = () => {
    setIsChangePassModalOpen(false);
  }
    
    return(
        <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center min"
        style={{ backgroundImage: `url(${IMAGES.bgImage})` }}
      >
        <div className="bg-[#FEFDFC] p-8 rounded-xl shadow-lg absolute w-1/3 ">
          <form className="-top-20" onSubmit={formik.handleSubmit}>
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
            <div className="mb-4">
              <CustomInput
                type={showPassword ? "text" : "password"}
                title="Password"
                placeholder="Password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                rightPart={
                  <span onClick={handleTogglePasswordVisibility}>
                    {showPassword ? <EyeSvgIcon /> : <ClosedEyeSvgIcon />}
                  </span>
                }
              />
              {formik.touched.password && formik.errors.password ? (
                <ErrorMessage>{formik.errors.password}</ErrorMessage>
              ) : null}
            </div>
            <div className="" onClick={openChangePassModal}>
                <p className="text-labelColor text-sm font-normal cursor-pointer">
                  Change Password
                </p>
            </div>
              <ChangePassModal
              isOpen={isChnagePassModalOpen}
              closeModal={closeChangePassModal}
              profile={false}
              />
            <div className="mt-12">
              <CustomButton title="Login" loading={buttonIsLoading} />
            </div>
          </form>
        </div>
      </div>
    )
}

export default LoginPage;