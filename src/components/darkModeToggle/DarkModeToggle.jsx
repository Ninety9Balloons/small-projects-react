import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";

export const Toggle = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    function isDark() {
        return theme === "dark";
    }

    function toggleTheme(e) {
        setTheme(e.target.checked ? "dark" : "light");
    }

    return (
        <label className="text-primary cursor-pointer">
            <input
                type="checkbox"
                checked={isDark()}
                onChange={(e) => toggleTheme(e)}
                className="hidden"
            />

            {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </label>
    );
};
