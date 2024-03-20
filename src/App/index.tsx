import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { polygon } from 'wagmi/chains';
import RouterOutlet from './Routes';
import { persistor, store } from '@/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  const queryClient = new QueryClient();

  const config = getDefaultConfig({
    appName: 'React Boilerplate',
    projectId: 'ae575761a72370ab88834655acbba677',
    // chains: [mainnet, polygon, optimism, arbitrum, base, zora],
    chains: [polygon],
  });

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider modalSize="compact">
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <RouterOutlet />
            </PersistGate>
          </Provider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default App;
