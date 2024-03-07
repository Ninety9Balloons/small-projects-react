/* eslint-disable react/prop-types */
function Header({ setMenuOpen }) {
    return (
        <div className="flex justify-between items-center">
            {/* Logo */}
            <img src="/assets/images/introsection/logo.svg" alt="Snap Logo" />

            {/* Hamburger */}
            <img
                src="/assets/images/introsection/icon-menu.svg"
                alt="Hamburger Menu"
                className="w-7 h-5"
                onClick={() => setMenuOpen(true)}
            />
        </div>
    );
}

export default Header;
