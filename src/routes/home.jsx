import Card from "../components/displayCard/Card";

function Home() {
    return (
        <div>
            <div>This is the home page</div>
            <div className="flex p-10 gap-10">
                <Card src={"./recipepage"} text={"Recipe Page"} />
                <Card src={"./sociallinks"} text={"Social Links"} />
                <Card src={"./notificationspage"} text={"Notifications Page"} />
            </div>
        </div>
    );
}

export default Home;
