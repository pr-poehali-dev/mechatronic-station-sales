import { useState } from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Icon name="Zap" className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">
                MechaTech
              </span>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
            >
              Главная
            </a>
            <a
              href="#equipment"
              className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
            >
              Оборудование
            </a>
            <a
              href="#specs"
              className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
            >
              Характеристики
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
            >
              О компании
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
            >
              Контакты
            </a>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#home"
              className="block px-3 py-2 text-gray-300 hover:text-white"
            >
              Главная
            </a>
            <a
              href="#equipment"
              className="block px-3 py-2 text-gray-300 hover:text-white"
            >
              Оборудование
            </a>
            <a
              href="#specs"
              className="block px-3 py-2 text-gray-300 hover:text-white"
            >
              Характеристики
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-gray-300 hover:text-white"
            >
              О компании
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-300 hover:text-white"
            >
              Контакты
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
