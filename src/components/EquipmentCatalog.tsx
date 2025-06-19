import EquipmentCard from "./EquipmentCard";

const EquipmentCatalog = () => {
  const equipment = [
    {
      title: "Фрезерный станок",
      model: "MT-3040 Pro",
      image: "/api/placeholder/400/300",
      specs: {
        power: "7.5 кВт",
        precision: "±0.005 мм",
        speed: "12 м/мин",
        workZone: "800×600×400",
      },
      price: "2 850 000",
      features: [
        "Автоматическая смена инструмента",
        "Система охлаждения",
        "ЧПУ Siemens 840D",
        "Защитное ограждение",
      ],
    },
    {
      title: "Токарный станок",
      model: "MT-2580 CNC",
      image: "/api/placeholder/400/300",
      specs: {
        power: "5.5 кВт",
        precision: "±0.002 мм",
        speed: "8 м/мин",
        workZone: "Ø250×800",
      },
      price: "1 950 000",
      features: [
        "Револьверная головка",
        "Автоподатчик прутка",
        "Система контроля износа",
        "Встроенная диагностика",
      ],
    },
    {
      title: "Шлифовальный станок",
      model: "MT-1240 Precision",
      image: "/api/placeholder/400/300",
      specs: {
        power: "3.0 кВт",
        precision: "±0.001 мм",
        speed: "6 м/мин",
        workZone: "400×200×150",
      },
      price: "1 450 000",
      features: [
        "Прецизионная балансировка",
        "Автоматическая правка круга",
        "Измерительная система",
        "Виброгашение",
      ],
    },
  ];

  return (
    <section id="equipment" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Каталог оборудования
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Широкий выбор высокотехнологичного оборудования для промышленных
            предприятий
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipment.map((item, index) => (
            <EquipmentCard key={index} {...item} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Посмотреть весь каталог
          </button>
        </div>
      </div>
    </section>
  );
};

export default EquipmentCatalog;
