import { useState } from "react";
import Icon from "@/components/ui/icon";

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Демонстрация работы
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Посмотрите как работают наши мехатронные станции в реальных
            производственных условиях
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="relative aspect-video bg-slate-800 rounded-xl overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-6 transition-all group-hover:scale-110"
                >
                  <Icon
                    name={isPlaying ? "Pause" : "Play"}
                    className="w-12 h-12 text-white"
                  />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-semibold text-lg mb-2">
                  Фрезерный станок MT-3040 Pro
                </h3>
                <p className="text-gray-300 text-sm">
                  Высокоскоростная обработка металлических деталей
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-video bg-slate-800 rounded-lg flex items-center justify-center group cursor-pointer">
                <Icon
                  name="Play"
                  className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors"
                />
              </div>
              <div className="aspect-video bg-slate-800 rounded-lg flex items-center justify-center group cursor-pointer">
                <Icon
                  name="Play"
                  className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors"
                />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Что вы увидите в демонстрации
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Icon
                    name="Check"
                    className="w-5 h-5 text-green-400 mr-3 mt-0.5"
                  />
                  <div>
                    <span className="text-white font-medium">
                      Автоматическая смена инструмента
                    </span>
                    <p className="text-gray-400 text-sm mt-1">
                      Быстрая смена инструмента без остановки процесса
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Icon
                    name="Check"
                    className="w-5 h-5 text-green-400 mr-3 mt-0.5"
                  />
                  <div>
                    <span className="text-white font-medium">
                      Прецизионная обработка
                    </span>
                    <p className="text-gray-400 text-sm mt-1">
                      Точность позиционирования ±0.001 мм
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Icon
                    name="Check"
                    className="w-5 h-5 text-green-400 mr-3 mt-0.5"
                  />
                  <div>
                    <span className="text-white font-medium">
                      Система контроля качества
                    </span>
                    <p className="text-gray-400 text-sm mt-1">
                      Автоматический контроль размеров в процессе обработки
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Icon
                    name="Check"
                    className="w-5 h-5 text-green-400 mr-3 mt-0.5"
                  />
                  <div>
                    <span className="text-white font-medium">
                      Интеграция с CAD/CAM
                    </span>
                    <p className="text-gray-400 text-sm mt-1">
                      Прямая загрузка программ из систем проектирования
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6">
              <h4 className="text-white font-semibold text-lg mb-2">
                Хотите увидеть станки в действии?
              </h4>
              <p className="text-blue-100 text-sm mb-4">
                Запишитесь на демонстрацию в нашем технологическом центре
              </p>
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-2 rounded-lg font-medium transition-colors">
                Записаться на демо
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPlayer;
