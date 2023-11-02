import React from "react";
import {createRoot} from "react-dom/client";

//Create React element with h1 size, printing string
const element = React.createElement("h1", {}, "Hello World");

//Creates a reference to the root element from the page
const root = document.querySelector("#react-root");
//Creates the root and renders the passed React element to the screen
createRoot(root).render(element);

