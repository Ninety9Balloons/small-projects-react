export default function Header() {
    return (
        <div className="bg-primary-jobs flex justify-center w-full">
            <img
                src="/assets/images/joblistings/images/bg-header-mobile.svg"
                alt="header"
                className="md:hidden"
            />
            <img
                src="/assets/images/joblistings/images/bg-header-desktop.svg"
                alt="header"
                className="hidden md:block"
            />
        </div>
    );
}
