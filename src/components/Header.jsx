import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function Header() {
     const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <nav>
            <div className="flex flex-wrap justify-around">
                <NavLink to="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 dark:hover:text-gray-500 dark:hover:bg-gray-800 transition">Início</NavLink>
                <NavLink to="/projects" className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 dark:hover:text-gray-500 dark:hover:bg-gray-800 transition">Projetos</NavLink>
                <NavLink to="/completed" className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 dark:hover:text-gray-500 dark:hover:bg-gray-800 transition">Concluídos</NavLink>
                <NavLink to="/about" className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 dark:hover:text-gray-500 dark:hover:bg-gray-800 transition">Sobre</NavLink>
                <NavLink to="/statistics" className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 dark:hover:text-gray-500 dark:hover:bg-gray-800 transition">Estatísticas</NavLink>
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