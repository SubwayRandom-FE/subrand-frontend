import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css"; //Global style import

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);