import setupAxios from "_core/configs/setupAxios";
import axios from "_core/client/http";
import { store } from "_core/store/store";
import { persistStore } from "redux-persist";
import { GoogleReCaptchaProvider, } from "react-google-recaptcha-v3";
import { GOOGLE_CAPTCHA_SECRET } from "_core/configs/config";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import AppProvided from 'domains/App';
import { MainLayout } from "_core/layouts/Main";
import "assets/styles/index.css";

// ** Extend App Props with Emotion

let persistor = persistStore(store);
setupAxios(axios, store);

const App = (props: any) => {
    const { Component, pageProps: { session, ...pageProps } } = props;
    const getLayout = ((page: any) => <MainLayout>{page}</MainLayout>);

    return (
        <GoogleReCaptchaProvider reCaptchaKey={GOOGLE_CAPTCHA_SECRET?.toString()}>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <AppProvided getLayout={getLayout} Component={Component} pageProps={pageProps} />
                </PersistGate>
            </Provider>
        </GoogleReCaptchaProvider>
    )
}

export default App