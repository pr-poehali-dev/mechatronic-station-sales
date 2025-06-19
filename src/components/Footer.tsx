import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <div className="flex items-center">
              <Icon name="Zap" className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold">MechaTech</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Ведущий поставщик мехатронных станций и промышленного
              оборудования. Более 15 лет опыта в автоматизации производства.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-slate-800 hover:bg-slate-700 p-2 rounded-lg transition-colors"
              >
                <Icon name="Mail" className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-slate-800 hover:bg-slate-700 p-2 rounded-lg transition-colors"
              >
                <Icon name="Phone" className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-slate-800 hover:bg-slate-700 p-2 rounded-lg transition-colors"
              >
                <Icon name="MapPin" className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Оборудование</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Фрезерные станки
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Токарные станки
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Шлифовальные станки
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Обрабатывающие центры
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Роботизированные системы
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Услуги</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Техническое обслуживание
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Модернизация
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Обучение персонала
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Гарантийное обслуживание
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Консультации
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Контакты</h3>
            <div className="space-y-4 text-gray-400 text-sm">
              <div className="flex items-start">
                <Icon
                  name="MapPin"
                  className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0"
                />
                <div>
                  <p>г. Москва, ул. Промышленная, 15</p>
                  <p>БЦ "Технопарк", этаж 7</p>
                </div>
              </div>
              <div className="flex items-center">
                <Icon name="Phone" className="w-5 h-5 mr-3 flex-shrink-0" />
                <a
                  href="tel:+74951234567"
                  className="hover:text-white transition-colors"
                >
                  +7 (495) 123-45-67
                </a>
              </div>
              <div className="flex items-center">
                <Icon name="Mail" className="w-5 h-5 mr-3 flex-shrink-0" />
                <a
                  href="mailto:info@mechatech.ru"
                  className="hover:text-white transition-colors"
                >
                  info@mechatech.ru
                </a>
              </div>
              <div className="flex items-center">
                <Icon name="Clock" className="w-5 h-5 mr-3 flex-shrink-0" />
                <p>Пн-Пт: 09:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 MechaTech. Все права защищены.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Политика конфиденциальности
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
