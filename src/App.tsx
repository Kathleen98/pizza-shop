import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme/theme-provider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "./lib/react-query";
import { QueryClientProvider } from "@tanstack/react-query";

function App() {
  return (
    <>
      <HelmetProvider>
        <ThemeProvider defaultTheme="dark" storageKey="pizza-shop-ui-theme">
          <Toaster richColors />
          <Helmet titleTemplate="%s | pizza.shop" />
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools />
            <RouterProvider router={router} />
          </QueryClientProvider>
        </ThemeProvider>
      </HelmetProvider>
    </>
  );
}

export default App;
