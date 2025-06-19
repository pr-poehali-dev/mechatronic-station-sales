import Icon from "@/components/ui/icon";

const AboutSection = () => {
  const achievements = [
    {
      number: "500+",
      label: "Установленных станков",
      icon: "Factory",
    },
    {
      number: "15+",
      label: "Лет на рынке",
      icon: "Calendar",
    },
    {
      number: "50+",
      label: "Крупных клиентов",
      icon: "Users",
    },
    {
      number: "99.2%",
      label: "Время безотказной работы",
      icon: "Shield",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              О компании MechaTech
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Мы — ведущий российский производитель и поставщик высокоточного
              мехатронного оборудования. Наша миссия — обеспечить российскую
              промышленность передовыми технологическими решениями.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              За 15 лет работы мы установили более 500 станков на предприятиях
              различных отраслей: от авиакосмической до автомобильной
              промышленности.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <Icon name="Check" className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-slate-700">
                  Собственное производство в России
                </span>
              </div>
              <div className="flex items-center">
                <Icon name="Check" className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-slate-700">
                  Сертификация ISO 9001:2015
                </span>
              </div>
              <div className="flex items-center">
                <Icon name="Check" className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-slate-700">
                  Гарантия до 3 лет на все оборудование
                </span>
              </div>
              <div className="flex items-center">
                <Icon name="Check" className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-slate-700">
                  24/7 техническая поддержка
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={achievement.icon}
                    className="w-8 h-8 text-blue-600"
                  />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  {achievement.number}
                </div>
                <div className="text-sm text-slate-600">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
