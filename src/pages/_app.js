import Login from "../components/Login/Login";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "../styles/login.css";

function MyApp({ Component, pageProps }) {
  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Login />

        <Component {...pageProps} />
      </div>
    </DndProvider>
  );
}

export default MyApp;
