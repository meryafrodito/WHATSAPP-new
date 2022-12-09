import { Route, Routes } from "react-router-dom";
import "../src/Styles/Style.css";
import CallBar from "./Pages/Call";
import ChatCard from "./Pages/Chat";
import NavBar from "./Pages/Navbar";
import StatusCard from "./Pages/Status";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/Chat" element={<ChatCard />} />
        <Route path="/Status" element={<StatusCard />} />
        <Route path="/Call" element={<CallBar />} />
      </Routes>
    </>
  );
}
export default App;
