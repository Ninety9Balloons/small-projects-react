import Card from "../components/displayCard/Card";

function Home() {
    return (
        <div>
            <div className="flex p-10 gap-10">
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
                    imgSrc={"notifications/dark-mode-screenshot.png"}
                />
            </div>
        </div>
    );
}

export default Home;
