import * as React from "react";
import { createRoot } from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import client from "./Graphql/client";
import App from "./App";
import "./index.css";
 
// Obtiene el elemento root del HTML
const rootElement = document.getElementById("root");
 
if (!rootElement) {
  throw new Error("No se encontró el elemento #root en el HTML.");
}
 
// Renderiza la app en React 18+ o 19 con ApolloProvider
createRoot(rootElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
 