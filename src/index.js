import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {MuiThemeProvider} from "@material-ui/core";
import {theme} from "./Components/CreateTheme";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <MuiThemeProvider theme={theme}>
              <App />
          </MuiThemeProvider>
      </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);


