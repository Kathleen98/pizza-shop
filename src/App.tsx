import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { router } from "./routes";
import { RouterProvider } from "react-router-dom";
import {Helmet, HelmetProvider} from 'react-helmet-async'

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
       <HelmetProvider>
        <Helmet titleTemplate="%s | pizza.shop" />
       <RouterProvider router={router} /> 
       </HelmetProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
