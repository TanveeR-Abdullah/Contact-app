import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ContactProvider from "./context/ContactContext";



ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <ContactProvider>
            <App />
        </ContactProvider>
    </BrowserRouter>
);