import { DataContext } from "../../context/DataContext";
import { useContext } from "react";
import FeaturedCard from "./FeaturedCard";
import { Carousel } from "@material-tailwind/react";

export default function Featured() {
    const { steamData, loading } = useContext(DataContext);
    const randomGameArray = [];
    // Get random games from steamData to display as Featured Games
    if (!loading && steamData?.length > 0) {
        for (let i = 0; i < 10; i++) {
            const randomIndex = Math.floor(Math.random() * steamData?.length);
            const randomGame = steamData[randomIndex];
            randomGameArray.push(randomGame);
        }
    }

    return (
        <div className="w-full pt-6 px-2 h-full relative overflow:hidden">
            <img
                src="cluster_bg.png"
                alt="background"
                className="w-full absolute bottom-0 left-0"
            />

            <h2 className="text-white uppercase text-sm mb-2">
                Featured & Recommended
            </h2>
            <Carousel
                autoplay={true}
                loop={true}
                className="h-full pb-10"
                navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                        {new Array(length).fill("").map((_, i) => (
                            <span
                                key={i}
                                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                    activeIndex === i
                                        ? "w-14 bg-white/50"
                                        : "w-4 bg-transparent"
                                }`}
                                onClick={() => setActiveIndex(i)}
                            />
                        ))}
                    </div>
                )}
            >
                {!loading ? (
                    randomGameArray.map((item) => (
                        <FeaturedCard
                            key={item?.sid}
                            title={item?.name}
                            fullPrice={item?.full_price}
                            discount={item?.discount}
                            currentPrice={item?.current_price}
                            image={item?.image}
                        />
                    ))
                ) : (
                    <p className="text-white">Loading</p>
                )}
            </Carousel>
        </div>
    );
}
