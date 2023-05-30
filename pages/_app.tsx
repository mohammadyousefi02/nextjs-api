import { LanguageProvider } from "@/context/languageContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store, myPersistStore } from "../redux/persistor";
import { PersistGate } from "redux-persist/integration/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={myPersistStore}>
        <LanguageProvider>
          <Component {...pageProps} />
        </LanguageProvider>
      </PersistGate>
    </Provider>
  );
}
