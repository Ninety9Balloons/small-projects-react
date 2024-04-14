import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import Header from "./components/header/Header";
import RecipePage from "./routes/RecipePage/recipePage";
import SocialLinks from "./routes/SocialLinks/SocialLinks";
import NotificationsPage from "./routes/NotificationsPage/NotificationsPage";
import IntroSection from "./routes/IntroSection/IntroSection";
import RatingComponent from "./routes/RatingComponent/RatingComponent";
import AdviceGenerator from "./routes/AdviceGenerator/AdviceGenerator";
import CommentsSection from "./routes/CommentsSection/CommentsSection";
import ECommerceProductPage from "./routes/ECommerceProductPage/ECommerceProductPage";
import JobListings from "./routes/JobListings/JobListings";
import SocialMediaDashboard from "./routes/SocialMediaDashboard/SocialMediaDashboard";
import SpaceTourism from "./routes/SpaceTourism/SpaceTourism";
import TodoApp from "./routes/TodoApp/TodoApp";
import RoomHomepage from "./routes/RoomHomepage/RoomHomepage";
import EasyBank from "./routes/EasyBank/EasyBank";

function App() {
    return (
        <div className="bg-primary min-w-screen min-h-screen pt-[100px]">
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
                    <Route
                        path="/commentssection"
                        element={<CommentsSection />}
                    />
                    <Route
                        path="/ecommerceproductpage"
                        element={<ECommerceProductPage />}
                    />
                    <Route path="/joblistings" element={<JobListings />} />
                    <Route
                        path="/socialmediadashboard"
                        element={<SocialMediaDashboard />}
                    />
                    <Route path="/spacetourism/*" element={<SpaceTourism />} />
                    <Route path="/todoapp" element={<TodoApp />} />
                    <Route path="/room-homepage" element={<RoomHomepage />} />
                    <Route path="/easybank" element={<EasyBank />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
