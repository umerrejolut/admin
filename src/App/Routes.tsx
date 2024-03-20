import SignupPage from '@/Pages/Auth/Signup';
import Posts from '@/Pages/Posts';
import { ethers } from 'ethers';
import { useEffect } from 'react';
import {
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import { useAccount, useDisconnect } from 'wagmi';
import Home from '../Pages/Home';
import LoginPage from '@/Pages/LoginPage';
import DashboardLayout from '@/Pages/DashboardPage';
import ManageAirdropsPage from '@/Pages/DashboardPage/ManageAirdrops';

const RouterOutlet = () => {
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  useEffect(() => {
    isConnected && signMessage();
    // eslint-disable-next-line
  }, [isConnected]);

  const getSigner = () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    return provider?.getSigner();
  };

  const signMessage = async () => {
    try {
      const signer = await getSigner();
      const message = `Sign this message to validate that you are the owner of the account. Random string`;
      const signature = await signer.signMessage(message);
      console.log('signature', signature);
    } catch (error) {
      disconnect();
    }
  };

  return (
    <Router>
      <Routes>
        {/* <Route path='/' element={<RootLayout/>}> */}
          {/* <Route index element={<Login/>}/>   */}
          <Route path='/' element={<LoginPage/>}/>        
        {/* <Route path='/' element={<RootLayout/>}> */}
          <Route path="/Home" element={<Home />} />
          <Route path="/register" element={<SignupPage />} />
          <Route path="/posts" element={<Posts />} />

          <Route
          path="dashboard"
          element={
            <DashboardLayout>
              <Outlet />
            </DashboardLayout>
          }
        >
          {/* <Route index element={<ManageAirdropsPage />} /> */}
          <Route
            path="manage-airdrops"
            element={
                <Outlet />
            }
          >
            <Route index element={<ManageAirdropsPage />} />
          </Route>
        </Route>
        {/* </Route> */}
        {/* </Route> */}
      </Routes>
    </Router>
  );
};

export default RouterOutlet;
