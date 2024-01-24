import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Survey from "./pages/Survey";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useOpenSidebar } from "./hooks/app";
import Login from "./pages/Login";
import { useState } from "react";

function App() {
    const [session, setSession] = useState(true);
    const { openSidebar, handleOpenSidebar, cssClass } = useOpenSidebar();

    if (!session) return <Login setSession={setSession} />;
    return (
        <>
            <Router>
                <div className={"layout" + cssClass}>
                    <Header />
                    <Sidebar
                        isOpen={openSidebar}
                        toggleSidebar={handleOpenSidebar}
                        title="My React App"
                    />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/users" element={<Users />} />
                            <Route path="/survey" element={<Survey />} />
                        </Routes>
                    </main>
                </div>
            </Router>
        </>
    );
}

export default App;
