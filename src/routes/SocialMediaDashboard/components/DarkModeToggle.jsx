export default function DarkModeToggle() {
    function handleClick() {
        if (
            localStorage.themeDashboard === "dark" ||
            !("themeDashboard" in localStorage)
        ) {
            //remove className=dark in html element
            document.documentElement.classList.remove("dark");
        } else {
            //add class=dark in html element
            document.documentElement.classList.add("dark");
        }

        if (localStorage.themeDashboard === "dark") {
            localStorage.themeDashboard = "light";
        } else {
            localStorage.themeDashboard = "dark";
        }
    }

    return (
        <div className="flex py-3 justify-between items-center md:gap-3">
            <div className="font-bold dark:text-desaturated-blue text-dark-grayish-blue text-sm">
                Dark Mode
            </div>
            <div className="flex items-center">
                <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div
                        onClick={handleClick}
                        className="relative w-11 h-6 dark:bg-gradient-to-r dark:from-dark-theme-start dark:to-dark-theme-end rounded-full peer-checked:after:translate-x-7 rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[4px] after:start-[2px] dark:after:bg-dark-desaturated-blue after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-light-theme"
                    ></div>
                </label>
            </div>
        </div>
    );
}
