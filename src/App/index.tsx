import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RouterOutlet from './Routes';

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterOutlet />
    </QueryClientProvider>
  );
};

export default App;
