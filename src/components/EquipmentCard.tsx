import Icon from "@/components/ui/icon";

interface EquipmentCardProps {
  title: string;
  model: string;
  image: string;
  specs: {
    power: string;
    precision: string;
    speed: string;
    workZone: string;
  };
  price: string;
  features: string[];
}

const EquipmentCard = ({
  title,
  model,
  image,
  specs,
  price,
  features,
}: EquipmentCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-slate-200">
      <div className="aspect-video bg-slate-200 flex items-center justify-center">
        <Icon name="Cog" className="w-20 h-20 text-slate-400" />
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-slate-900 mb-1">{title}</h3>
          <p className="text-slate-600 font-medium">{model}</p>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
          <div className="flex items-center">
            <Icon name="Zap" className="w-4 h-4 text-blue-500 mr-2" />
            <span className="text-slate-600">Мощность: {specs.power}</span>
          </div>
          <div className="flex items-center">
            <Icon name="Target" className="w-4 h-4 text-green-500 mr-2" />
            <span className="text-slate-600">Точность: {specs.precision}</span>
          </div>
          <div className="flex items-center">
            <Icon name="Gauge" className="w-4 h-4 text-purple-500 mr-2" />
            <span className="text-slate-600">Скорость: {specs.speed}</span>
          </div>
          <div className="flex items-center">
            <Icon name="Maximize" className="w-4 h-4 text-orange-500 mr-2" />
            <span className="text-slate-600">Зона: {specs.workZone}</span>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-slate-900 mb-2">Особенности:</h4>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center text-sm text-slate-600"
              >
                <Icon
                  name="Check"
                  className="w-3 h-3 text-green-500 mr-2 flex-shrink-0"
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-blue-600">{price}</span>
            <span className="text-slate-500 text-sm ml-1">руб.</span>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Подробнее
          </button>
        </div>
      </div>
    </div>
  );
};

export default EquipmentCard;
