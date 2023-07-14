import "./App.css";
import { Home } from "./pages/home";
import { User } from "./pages/user";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { useState } from "react";
import UserContext from "./contexts/user.context";


export default function App() {
  const [username, setUsername] = useState("bob89");

  return (
    <div className="App">
      <UserContext.Provider value={{ username, setUsername }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home username={username} />} />
          <Route
            path="/user"
            element={<User username={username} setUsername={setUsername} />}
          />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}
