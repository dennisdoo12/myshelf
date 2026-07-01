//This is a react component that catches mistakes while building the app and displays in the console. 
import { StrictMode } from "react";
//this takes the react app and displays it in the webpage
import { createRoot } from "react-dom/client";
//multiple pages and react router cocntrols the pages 
import { BrowserRouter } from "react-router-dom";
//tanstack query that manages loading caching erros for the react app 
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//imports the main app and is the start page of the project 
import App from "./App";
//loads the css styling file for the application
import "./index.css";
//query client caches the data so react doesnt have to keep requesting the same information from the server and makes the app faster and more efficient. 
const queryClient = new QueryClient();
//creates the root of the react app and renders it to the webpage. Strict mode just helps detects all the bugs and issues. 
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/*//browser router is used for navigation and does stuff like know what page the user is on and so on. */}
    <BrowserRouter>
    {/*//query client provider helps avoid unnecessary requests so that the server is faster. */}
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);