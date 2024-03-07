import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import Header from "./components/header/Header";
import RecipePage from "./routes/recipePage";
import SocialLinks from "./routes/socialLinks";
import NotificationsPage from "./routes/NotificationsPage";

function App() {
    return (
        <div className="bg-primary min-w-screen h-screen pt-32">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/recipepage" element={<RecipePage />} />
                    <Route path="/sociallinks" element={<SocialLinks />} />
                    <Route
                        path="/notificationspage"
                        element={<NotificationsPage />}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
