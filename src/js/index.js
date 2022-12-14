//import react into the bundle
import React from "react";
import {render} from 'react-dom';


//include bootstrap npm library into the bundle
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Layout from "./layout";

//render your react application
render(<Layout />, document.querySelector("#root"));
