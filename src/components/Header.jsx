import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function Header() {
     const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <nav>
            <div className="flex justify-around">
                <NavLink to="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition">Home</NavLink>
                <NavLink to="/projects" className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition">Projects</NavLink>
                <NavLink to="/completed" className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition">Conpleted</NavLink>
                <NavLink to="/about" className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition">About</NavLink>
                <NavLink to="/statistics" className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition">Estatísticas</NavLink>
                 <button
                    onClick={toggleTheme}
                    className="bg-slate-200 dark:bg-slate-800 px-3 py-2 rounded-lg"
                    >
                    {theme === "dark" ? "☀️ Claro" : "🌙 Escuro"}
                </button>
            </div>
        </nav>
    )
}

export default Header;