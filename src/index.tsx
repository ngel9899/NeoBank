import React, {useState} from "react";
import {BrowserRouter} from "react-router-dom";
import { createRoot } from "react-dom/client"
import "./sass/global.sass";
import "./font/stylesheet.sass";
import {AppRoutes} from "./routes";
import store, {persistor} from './app/store'
import { Provider } from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react';

function Menu (){
    return(
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
              <BrowserRouter>
                  <AppRoutes />
              </BrowserRouter>
          </PersistGate>
      </Provider>
    )
}

createRoot(document.getElementById("root")!).render(<Menu />);

