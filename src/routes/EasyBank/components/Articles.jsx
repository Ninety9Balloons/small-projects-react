import data from "../data.json";
import ArticleItem from "./ArticleItem";

const articlesData = data.articles;

export default function Articles() {
    return (
        <div className="bg-very-light-gray w-full py-20 flex flex-col items-center lg:items-start px-5">
            {/* Heading */}
            <h3 className="text-3xl px-10 mb-10 font-semibold text-center lg:text-left lg:px-0">
                Latest Articles
            </h3>

            {/* Items */}
            <div className="flex flex-col lg:flex-row lg:gap-5">
                {articlesData.map((item) => (
                    <ArticleItem
                        key={item.title}
                        image={item.image}
                        author={item.author}
                        title={item.title}
                        text={item.text}
                    />
                ))}
            </div>
        </div>
    );
}
