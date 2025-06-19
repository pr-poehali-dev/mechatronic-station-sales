import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Промышленные
                <span className="text-blue-400 block">Мехатронные</span>
                <span className="text-purple-400">Станции</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Высокоточное оборудование для автоматизации производственных
                процессов. Технологии будущего уже сегодня.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                <Icon name="Play" className="w-5 h-5 mr-2" />
                Смотреть демо
              </button>
              <button className="border border-gray-400 hover:border-white text-gray-300 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Каталог оборудования
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">15+</div>
                <div className="text-sm text-gray-400">Лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">500+</div>
                <div className="text-sm text-gray-400">Проектов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">99.9%</div>
                <div className="text-sm text-gray-400">Надёжность</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-slate-700">
              <div className="aspect-video bg-slate-800 rounded-lg flex items-center justify-center">
                <Icon
                  name="Cog"
                  className="w-24 h-24 text-gray-600 animate-spin"
                  style={{ animationDuration: "8s" }}
                />
              </div>
              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Точность обработки</span>
                  <span className="text-blue-400 font-semibold">±0.001 мм</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Скорость подачи</span>
                  <span className="text-purple-400 font-semibold">
                    15 м/мин
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Время цикла</span>
                  <span className="text-green-400 font-semibold">2.5 сек</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
