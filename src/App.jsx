import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import Header from "./components/header/Header";
import RecipePage from "./routes/RecipePage/recipePage";
import SocialLinks from "./routes/SocialLinks/SocialLinks";
import NotificationsPage from "./routes/NotificationsPage/NotificationsPage";
import IntroSection from "./routes/IntroSection/IntroSection";
import RatingComponent from "./routes/RatingComponent/RatingComponent";
import AdviceGenerator from "./routes/AdviceGenerator/AdviceGenerator";

function App() {
    return (
        <div className="bg-primary min-w-screen h-screen pt-[100px]">
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
                    <Route path="/introsection" element={<IntroSection />} />
                    <Route
                        path="/ratingcomponent"
                        element={<RatingComponent />}
                    />
                    <Route
                        path="/advicegenerator"
                        element={<AdviceGenerator />}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
