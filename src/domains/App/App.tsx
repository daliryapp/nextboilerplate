import { CssBaseline } from "@mui/material";
import ThemeProvider from "_core/theme";
import { store } from "_core/store/store";
import { Provider } from "react-redux";
import AppHead from "./components/Head/Head";
import LanguageProvider from "./providers/LanguageProvider";
import { QueryClient, QueryClientProvider } from "react-query";
import { MainLayout } from "_core/layouts/Main";
import { AuthGuard } from 'components/AuthGuard';
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import axios from "_core/client/http";
import setupAxios from "_core/configs/setupAxios";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
let persistor = persistStore(store);
setupAxios(axios, store);
function App(props: any) {
  const { Component, pageProps: { session, ...pageProps } } = props
  //@ts-ignore

  const getLayout = ((page: any) => <MainLayout>{page}</MainLayout>);

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeProvider>
            <AppHead />
            <CssBaseline />
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
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
