import "./App.css";
import Header from "./components/Header";
import ContentContainer from "./components/ContentContainer";
import data from "./data.json";

export default function JobListings() {
    const allData = data;

    return (
        // Background
        <div className="bg-neutral-background w-full h-full min-h-screen">
            {/* Content Container */}
            <div className="flex flex-col w-full justify-center items-center">
                {/* Header */}
                <Header />

                {/* Content */}
                <ContentContainer allData={allData} />
            </div>
        </div>
    );
}
