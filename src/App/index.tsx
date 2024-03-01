import RouterOutlet from "./Routes";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const App = () => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <RouterOutlet />
    </QueryClientProvider>
  );
};

export default App;
