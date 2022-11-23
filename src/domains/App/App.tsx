import { CssBaseline } from "@mui/material";
import ThemeProvider from "_core/theme";
import { store } from "_core/store/store";
import AppHead from "./components/Head/Head";
import LanguageProvider from "./providers/LanguageProvider";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthGuard } from 'components/AuthGuard';
import { persistStore } from "redux-persist";
import axios from "_core/client/http";
import setupAxios from "_core/configs/setupAxios";
import Toast from "components/Toast";
import AppModal from 'components/Modal';
import useModal from "_core/hooks/app/useModal";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
setupAxios(axios, store);
const AppProvided = (props: any) => {
  const { Component, pageProps, getLayout } = props

  const modalRef = useModal();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AppHead />
        <CssBaseline />
        <Toast />
        <AppModal ref={modalRef} />
        <LanguageProvider>
          {/* if requireAuth property is present - protect the page */}
          {Component.requireAuth ? (
            <AuthGuard>
              <>
                {getLayout(<Component {...pageProps} />)}
              </>
            </AuthGuard>
          ) : (
            // public page
            <>
              {getLayout(<Component {...pageProps} />)}
            </>
          )}
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>

  );
}

export default AppProvided;
