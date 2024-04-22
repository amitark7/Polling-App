import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import UserList from "./pages/UserList";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PollsPage from "./pages/PollsPage";
import AddPoll from "./pages/AddPoll";
import { useEffect, useState } from "react";
import NotFound from "./pages/NotFound";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(() => false);
    localStorage.clear();
    navigate("/");
  };
  useEffect(() => {
    const userFetch = JSON.parse(localStorage.getItem("user"));
    if (userFetch) {
      setIsLoggedIn(true);
    }
  }, [location]);

  return (
    <>
      {isLoggedIn && <Navbar onLogout={handleLogout} />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/polling" element={<PollsPage />} />
        <Route path="/addpoll" element={<AddPoll />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/createuser" element={<Signup />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
