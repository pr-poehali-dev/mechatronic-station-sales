import { useState } from "react";
import Icon from "@/components/ui/icon";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    equipment: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Отправка формы:", formData);
    // Здесь будет обработка отправки формы
    alert("Спасибо за заявку! Мы свяжемся с вами в ближайшее время.");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Получить консультацию
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Оставьте заявку, и наш специалист свяжется с вами для подбора
            оптимального решения под ваши задачи
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-slate-800 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Свяжитесь с нами
            </h3>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-blue-600 p-3 rounded-lg mr-4">
                  <Icon name="Phone" className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Телефон</p>
                  <p className="text-gray-400">+7 (495) 123-45-67</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-600 p-3 rounded-lg mr-4">
                  <Icon name="Mail" className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-gray-400">info@mechatech.ru</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-600 p-3 rounded-lg mr-4">
                  <Icon name="MapPin" className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Адрес</p>
                  <p className="text-gray-400">
                    г. Москва, ул. Промышленная, 15
                    <br />
                    БЦ "Технопарк", этаж 7
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-600 p-3 rounded-lg mr-4">
                  <Icon name="Clock" className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Режим работы</p>
                  <p className="text-gray-400">Пн-Пт: 09:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Имя *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Введите ваше имя"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Компания
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Название компании"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Телефон *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Интересующее оборудование
              </label>
              <select
                name="equipment"
                value={formData.equipment}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Выберите тип оборудования</option>
                <option value="milling">Фрезерные станки</option>
                <option value="turning">Токарные станки</option>
                <option value="grinding">Шлифовальные станки</option>
                <option value="machining">Обрабатывающие центры</option>
                <option value="other">Другое</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Сообщение
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Расскажите подробнее о ваших требованиях..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center"
            >
              <Icon name="Send" className="w-5 h-5 mr-2" />
              Отправить заявку
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
