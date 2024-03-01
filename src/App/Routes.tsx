import SignupPage from '@/Pages/Auth/Signup';
import Posts from '@/Pages/Posts';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { ethers } from 'ethers';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import { useAccount, useDisconnect } from 'wagmi';
import Home from '../Pages/Home';

const RouterOutlet = () => {
  const { t } = useTranslation();
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  useEffect(() => {
    isConnected && signMessage();
  }, [isConnected]);

  const getSigner = () => {
    let provider = new ethers.BrowserProvider(window.ethereum);
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
        <Route
          path="/"
          element={
            <div className="h-screen bg-background text-primary">
              <div className="flex items-center justify-between px-5 py-3">
                <h1 className="flex justify-center text-6xl">{t('title')}</h1>
                <ConnectButton
                  accountStatus="address"
                  chainStatus={'full'}
                  showBalance={true}
                />
              </div>
              <Outlet />
            </div>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<SignupPage />} />
          <Route path="/posts" element={<Posts />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RouterOutlet;
