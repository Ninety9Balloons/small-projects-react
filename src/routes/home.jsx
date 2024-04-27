import Card from "../components/displayCard/Card";

function Home() {
    return (
        <div>
            <div className="flex justify-center flex-wrap md:flex-row p-10 gap-10">
                <Card
                    src={"./recipepage"}
                    text={"Recipe Page"}
                    imgSrc={"recipepage/dark-mode-screenshot.png"}
                />
                <Card
                    src={"./sociallinks"}
                    text={"Social Links"}
                    imgSrc={"sociallinks/dark-mode-screenshot.png"}
                />
                <Card
                    src={"./notificationspage"}
                    text={"Notifications Page"}
                    imgSrc={"notifications/dark-mode-screenshot.png"}
                />
                <Card
                    src={"./introsection"}
                    text={"Intro Section"}
                    imgSrc={"introsection/dark-mode-screenshot.png"}
                />
                <Card
                    src={"./ratingcomponent"}
                    text={"Rating Component"}
                    imgSrc={"ratingcomponent/dark-mode-screenshot.png"}
                />
                <Card
                    src={"./advicegenerator"}
                    text={"Advice Generator"}
                    imgSrc={"advicegenerator/dark-mode-screenshot.png"}
                />
                <Card
                    src={"./commentssection"}
                    text={"Comments Section"}
                    imgSrc={"commentssection/dark-mode-screenshot.png"}
                />
                <Card
                    src={"./ecommerceproductpage"}
                    text={"ECommerce Product Page"}
                    imgSrc={"ecommerceproduct/screenshot.png"}
                />
                <Card
                    src={"./joblistings"}
                    text={"Job Listings"}
                    imgSrc={"joblistings/images/screenshot.png"}
                />
                <Card
                    src={"./socialmediadashboard"}
                    text={"Social Media Dashboard"}
                    imgSrc={"socialmediadashboard/screenshot.png"}
                />
                <Card
                    src={"./spacetourism/home"}
                    text={"Space Tourism"}
                    imgSrc={"spacetourism/screenshot.png"}
                />
                <Card
                    src={"./todoapp"}
                    text={"Todo App"}
                    imgSrc={"todo-app/screenshot.png"}
                />
                <Card
                    src={"./room-homepage"}
                    text={"Room Home Page"}
                    imgSrc={"room-homepage/screenshot.png"}
                />
                <Card
                    src={"./easybank"}
                    text={"Easy Bank Landing Page"}
                    imgSrc={"easybank/screenshot.png"}
                />
                <Card
                    src={"./manage"}
                    text={"Manage Landing Page"}
                    imgSrc={"manage/screenshot.png"}
                />
                <Card
                    src={"./urlshortener"}
                    text={"URL Shortener"}
                    imgSrc={"url-shortening/screenshot.png"}
                />
                <Card
                    src={"./steamclone"}
                    text={"Steam Clone"}
                    imgSrc={"steamclone/screenshot.png"}
                />
            </div>
        </div>
    );
}

export default Home;
