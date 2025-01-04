import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/SideBar";
import CandidateDetails from "./Pages/CadidateDetails";
import { useState } from "react";
import { ChatBubble } from "@mui/icons-material";

function App() {
  const [openSidebar, setOpenSidebar] = useState(true);
  return (
    <div className="App">
      <Navbar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <div className="workspace">
        <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}  />
        <CandidateDetails />
      </div>
    </div>
  );
}

export default App;
