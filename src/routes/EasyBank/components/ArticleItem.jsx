/* eslint-disable react/prop-types */
export default function ArticleItem({ image, author, title, text }) {
    return (
        <div className="bg-white flex flex-col mb-10 rounded">
            {/* Image */}
            <img
                src={image}
                alt="Photo"
                className="w-full h-[200px] object-cover rounded-t"
            />

            {/* Text */}
            <div className="flex flex-col items-start gap-4 p-10">
                {/* Author */}
                <p className="text-sm text-grayish-blue">{author}</p>

                {/* Title */}
                <a className="font-semibold hover:text-lime-green transition-all text-xl cursor-pointer">
                    {title}
                </a>

                {/* Text */}
                <p className="text-grayish-blue">{text}</p>
            </div>
        </div>
    );
}
