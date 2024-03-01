import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, base, zora } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RouterOutlet from './Routes';

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
          <RouterOutlet />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default App;
