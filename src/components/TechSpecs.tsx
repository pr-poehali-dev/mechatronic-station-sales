import Icon from "@/components/ui/icon";

const TechSpecs = () => {
  const specs = [
    {
      title: "Точность позиционирования",
      value: "±0.001 мм",
      icon: "Target",
      description: "Высокоточная система позиционирования с обратной связью",
    },
    {
      title: "Скорость обработки",
      value: "15 м/мин",
      icon: "Zap",
      description: "Максимальная скорость перемещения рабочих органов",
    },
    {
      title: "Рабочая зона",
      value: "800×600×400 мм",
      icon: "Maximize",
      description: "Габариты рабочей зоны для обработки деталей",
    },
    {
      title: "Мощность шпинделя",
      value: "7.5 кВт",
      icon: "Cpu",
      description: "Высокомоментный шпиндель с водяным охлаждением",
    },
    {
      title: "Система ЧПУ",
      value: "Siemens 840D",
      icon: "Settings",
      description: "Современная система числового программного управления",
    },
    {
      title: "Время цикла",
      value: "2.5 сек",
      icon: "Clock",
      description: "Минимальное время выполнения базового цикла",
    },
  ];

  return (
    <section id="specs" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Технические характеристики
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Профессиональное оборудование с превосходными техническими
            показателями для решения самых сложных производственных задач
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specs.map((spec, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-slate-200"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Icon name={spec.icon} className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 ml-3">
                  {spec.title}
                </h3>
              </div>

              <div className="mb-3">
                <span className="text-3xl font-bold text-blue-600">
                  {spec.value}
                </span>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                {spec.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Дополнительные возможности
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Icon name="Check" className="w-5 h-5 text-green-400 mr-3" />
                  <span>Автоматическая смена инструмента (24 позиции)</span>
                </li>
                <li className="flex items-center">
                  <Icon name="Check" className="w-5 h-5 text-green-400 mr-3" />
                  <span>Система контроля износа инструмента</span>
                </li>
                <li className="flex items-center">
                  <Icon name="Check" className="w-5 h-5 text-green-400 mr-3" />
                  <span>Интеграция с системами CAD/CAM</span>
                </li>
                <li className="flex items-center">
                  <Icon name="Check" className="w-5 h-5 text-green-400 mr-3" />
                  <span>Удалённый мониторинг и диагностика</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <Icon
                  name="Award"
                  className="w-16 h-16 text-yellow-400 mx-auto mb-4"
                />
                <h4 className="text-xl font-semibold mb-2">
                  Сертификация ISO 9001
                </h4>
                <p className="text-blue-200">
                  Международные стандарты качества
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSpecs;
