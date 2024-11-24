import React from "react";
import { createRoot } from "react-dom/client";
import App from "./src/App.js";
import * as bootstrap from 'bootstrap';


const root = createRoot(document.getElementById('app'));
root.render(  
        <App/>  
);