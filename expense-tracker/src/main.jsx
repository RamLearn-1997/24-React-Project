import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider, theme } from "@chakra-ui/react";
import GlobalState from "./context/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalState>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </GlobalState>
);
