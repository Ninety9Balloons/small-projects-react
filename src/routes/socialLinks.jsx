import ButtonLink from "../SocialLinks/components/ButtonLink";

function SocialLinks() {
    return (
        <div className="flex justify-center items-center text-primary">
            {/* Main Container */}
            <div className="flex flex-col justify-center items-center bg-secondary rounded-lg p-8 shadow-xl">
                {/* Image */}
                <div>
                    <img
                        src="./assets/images/avatar-jessica.jpeg"
                        alt="User's avatar"
                        className="rounded-full object-fit w-20"
                    />
                </div>

                {/* Text */}
                <div className="flex flex-col items-center justify-between mt-4">
                    <h2 className="font-bold text-2xl">Jessica Randall</h2>
                    <p className="text-sm text-secondary font-bold">
                        London, United Kingdom
                    </p>

                    <p className="my-4 text-sm">
                        &quot;Front-end developer and avid reader.&quot;
                    </p>
                </div>

                {/* Button Links */}
                <div>
                    <ButtonLink text={"GitHub"} />
                    <ButtonLink text={"Frontend Mentor"} />
                    <ButtonLink text={"LinkedIn"} />
                    <ButtonLink text={"Twitter"} />
                    <ButtonLink text={"Instagram"} />
                </div>
            </div>
        </div>
    );
}

export default SocialLinks;
