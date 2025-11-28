import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface God {
  id: number;
  name: string;
  title: string;
  domain: string;
  symbol: string;
  image: string;
  description: string;
  powers: string[];
  myths: string[];
  attributes: string[];
}

const gods: God[] = [
  {
    id: 1,
    name: 'Зевс',
    title: 'Zeus',
    domain: 'Небо и гром',
    symbol: '⚡',
    image: 'https://cdn.poehali.dev/projects/369a86ec-04dc-4ea5-b2bb-bfad5519ea3e/files/da1ff160-13b4-4ea1-bc01-e4964000161f.jpg',
    description: 'Верховный бог Олимпа, повелитель неба, грома и молний. Царь богов и людей, олицетворение власти и справедливости.',
    powers: ['Метание молний', 'Управление погодой', 'Превращение в животных', 'Предвидение будущего'],
    myths: [
      'Победа над титанами и установление власти олимпийцев',
      'Свержение отца Кроноса',
      'Многочисленные романтические приключения с богинями и смертными'
    ],
    attributes: ['Молния', 'Скипетр', 'Орёл', 'Дуб']
  },
  {
    id: 2,
    name: 'Посейдон',
    title: 'Poseidon',
    domain: 'Моря и океаны',
    symbol: '🔱',
    image: 'https://cdn.poehali.dev/projects/369a86ec-04dc-4ea5-b2bb-bfad5519ea3e/files/caa487a4-ee46-47d0-ab7b-6dff7cc85b74.jpg',
    description: 'Бог морей, океанов, землетрясений и лошадей. Брат Зевса, один из трёх главных олимпийских богов.',
    powers: ['Управление морями', 'Создание землетрясений', 'Усмирение бурь', 'Общение с морскими существами'],
    myths: [
      'Соперничество с Афиной за покровительство Афинам',
      'Создание первого коня',
      'Помощь грекам в Троянской войне'
    ],
    attributes: ['Трезубец', 'Колесница с конями', 'Дельфины', 'Раковина']
  },
  {
    id: 3,
    name: 'Афина',
    title: 'Athena',
    domain: 'Мудрость и война',
    symbol: '🦉',
    image: 'https://cdn.poehali.dev/projects/369a86ec-04dc-4ea5-b2bb-bfad5519ea3e/files/9c0094f4-4bbe-40e8-b9f8-c87ef9c2fe03.jpg',
    description: 'Богиня мудрости, военной стратегии, справедливой войны и ремёсел. Покровительница Афин и защитница героев.',
    powers: ['Божественная мудрость', 'Военная стратегия', 'Покровительство ремёслам', 'Превращения'],
    myths: [
      'Рождение из головы Зевса в полном боевом облачении',
      'Победа над Посейдоном в споре за Афины',
      'Помощь героям: Одиссею, Персею, Гераклу'
    ],
    attributes: ['Эгида со щитом', 'Копьё', 'Сова', 'Оливковое дерево']
  },
  {
    id: 4,
    name: 'Аполлон',
    title: 'Apollo',
    domain: 'Свет и искусства',
    symbol: '☀️',
    image: 'https://cdn.poehali.dev/projects/369a86ec-04dc-4ea5-b2bb-bfad5519ea3e/files/09a1f3a3-21e1-4749-9756-173c8241cf60.jpg',
    description: 'Бог света, солнца, музыки, поэзии, искусств, врачевания и пророчеств. Один из самых почитаемых олимпийских богов.',
    powers: ['Исцеление', 'Пророчества', 'Управление солнцем', 'Музыкальное мастерство'],
    myths: [
      'Убийство змея Пифона и основание Дельфийского оракула',
      'История любви с Дафной',
      'Музыкальное соревнование с сатиром Марсием'
    ],
    attributes: ['Лира', 'Лук и стрелы', 'Лавровый венок', 'Солнечная колесница']
  },
  {
    id: 5,
    name: 'Артемида',
    title: 'Artemis',
    domain: 'Охота и луна',
    symbol: '🏹',
    image: 'https://cdn.poehali.dev/projects/369a86ec-04dc-4ea5-b2bb-bfad5519ea3e/files/9c0094f4-4bbe-40e8-b9f8-c87ef9c2fe03.jpg',
    description: 'Богиня охоты, дикой природы, целомудрия и луны. Сестра-близнец Аполлона, защитница молодых девушек.',
    powers: ['Безупречная меткость', 'Управление луной', 'Власть над животными', 'Вечная юность'],
    myths: [
      'Превращение Актеона в оленя',
      'Защита матери Лето от гнева Геры',
      'Калидонская охота на чудовищного вепря'
    ],
    attributes: ['Лук и колчан', 'Олень', 'Собаки', 'Кипарис']
  },
  {
    id: 6,
    name: 'Арес',
    title: 'Ares',
    domain: 'Война и битвы',
    symbol: '⚔️',
    image: 'https://cdn.poehali.dev/projects/369a86ec-04dc-4ea5-b2bb-bfad5519ea3e/files/09a1f3a3-21e1-4749-9756-173c8241cf60.jpg',
    description: 'Бог войны, кровопролития и ярости битвы. Олицетворение жестокости и насилия войны.',
    powers: ['Непобедимость в бою', 'Вдохновение воинов', 'Неистовая ярость', 'Бессмертие'],
    myths: [
      'Роман с Афродитой и гнев Гефеста',
      'Участие в Троянской войне на стороне троянцев',
      'Поединок с Гераклом'
    ],
    attributes: ['Меч и копьё', 'Шлем', 'Щит', 'Стервятник']
  },
  {
    id: 7,
    name: 'Афродита',
    title: 'Aphrodite',
    domain: 'Любовь и красота',
    symbol: '💗',
    image: 'https://cdn.poehali.dev/projects/369a86ec-04dc-4ea5-b2bb-bfad5519ea3e/files/9c0094f4-4bbe-40e8-b9f8-c87ef9c2fe03.jpg',
    description: 'Богиня любви, красоты, страсти и плодородия. Рождённая из морской пены, воплощение женской привлекательности.',
    powers: ['Внушение любви', 'Непревзойдённая красота', 'Обольщение', 'Управление страстями'],
    myths: [
      'Рождение из морской пены у берегов Кипра',
      'Суд Париса и начало Троянской войны',
      'История любви с Адонисом'
    ],
    attributes: ['Зеркало', 'Яблоко', 'Голубь', 'Роза']
  },
  {
    id: 8,
    name: 'Гермес',
    title: 'Hermes',
    domain: 'Торговля и путешествия',
    symbol: '🪽',
    image: 'https://cdn.poehali.dev/projects/369a86ec-04dc-4ea5-b2bb-bfad5519ea3e/files/09a1f3a3-21e1-4749-9756-173c8241cf60.jpg',
    description: 'Бог торговли, путешествий, воровства и посланник богов. Проводник душ в царство мёртвых.',
    powers: ['Невероятная скорость', 'Красноречие', 'Проникновение куда угодно', 'Проводник душ'],
    myths: [
      'Кража коров Аполлона в младенчестве',
      'Изобретение лиры и свирели',
      'Спасение Персефоны из подземного царства'
    ],
    attributes: ['Крылатые сандалии', 'Кадуцей', 'Шлем', 'Кошель']
  },
  {
    id: 9,
    name: 'Деметра',
    title: 'Demeter',
    domain: 'Земледелие и плодородие',
    symbol: '🌾',
    image: 'https://cdn.poehali.dev/projects/369a86ec-04dc-4ea5-b2bb-bfad5519ea3e/files/9c0094f4-4bbe-40e8-b9f8-c87ef9c2fe03.jpg',
    description: 'Богиня земледелия, плодородия, жатвы и времён года. Мать Персефоны, олицетворение материнской любви.',
    powers: ['Управление урожаем', 'Плодородие земли', 'Смена времён года', 'Растительная магия'],
    myths: [
      'Похищение дочери Персефоны Аидом',
      'Создание цикла времён года',
      'Основание Элевсинских мистерий'
    ],
    attributes: ['Колосья пшеницы', 'Факел', 'Серп', 'Рог изобилия']
  },
  {
    id: 10,
    name: 'Гефест',
    title: 'Hephaestus',
    domain: 'Кузнечное дело',
    symbol: '🔨',
    image: 'https://cdn.poehali.dev/projects/369a86ec-04dc-4ea5-b2bb-bfad5519ea3e/files/09a1f3a3-21e1-4749-9756-173c8241cf60.jpg',
    description: 'Бог кузнечного дела, огня, ремёсел и металлообработки. Создатель божественного оружия и доспехов.',
    powers: ['Мастерство кузнеца', 'Создание чудесных артефактов', 'Управление огнём', 'Изобретательность'],
    myths: [
      'Сброс с Олимпа и возвращение',
      'Создание доспехов Ахиллеса',
      'Ловушка для Афродиты и Ареса'
    ],
    attributes: ['Молот и наковальня', 'Кузнечные клещи', 'Огонь', 'Топор']
  },
  {
    id: 11,
    name: 'Гера',
    title: 'Hera',
    domain: 'Брак и семья',
    symbol: '👑',
    image: 'https://cdn.poehali.dev/projects/369a86ec-04dc-4ea5-b2bb-bfad5519ea3e/files/9c0094f4-4bbe-40e8-b9f8-c87ef9c2fe03.jpg',
    description: 'Царица богов, богиня брака, семьи и верности. Жена и сестра Зевса, защитница женщин.',
    powers: ['Покровительство браку', 'Защита рожениц', 'Царская власть', 'Месть неверным'],
    myths: [
      'Преследование возлюбленных Зевса',
      'Проклятие Геракла',
      'Участие в Троянской войне против троянцев'
    ],
    attributes: ['Скипетр', 'Диадема', 'Павлин', 'Гранат']
  },
  {
    id: 12,
    name: 'Дионис',
    title: 'Dionysus',
    domain: 'Вино и веселье',
    symbol: '🍷',
    image: 'https://cdn.poehali.dev/projects/369a86ec-04dc-4ea5-b2bb-bfad5519ea3e/files/09a1f3a3-21e1-4749-9756-173c8241cf60.jpg',
    description: 'Бог виноделия, виноградарства, веселья, театра и религиозного экстаза. Младший из олимпийцев.',
    powers: ['Виноделие', 'Вызывание экстаза', 'Превращения', 'Безумие'],
    myths: [
      'Рождение из бедра Зевса',
      'Путешествие в Индию и распространение виноградарства',
      'Превращение пиратов в дельфинов'
    ],
    attributes: ['Виноградная лоза', 'Тирс (жезл)', 'Плющ', 'Пантера']
  }
];

const Index = () => {
  const [selectedGod, setSelectedGod] = useState<God | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const domains = ['all', 'Небо и гром', 'Моря и океаны', 'Мудрость и война', 'Свет и искусства', 'Охота и луна', 'Война и битвы', 'Любовь и красота', 'Торговля и путешествия', 'Земледелие и плодородие', 'Кузнечное дело', 'Брак и семья', 'Вино и веселье'];

  const filteredGods = filter === 'all' ? gods : gods.filter(god => god.domain === filter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">
                Боги Олимпа
              </h1>
              <p className="text-muted-foreground text-lg">
                Энциклопедия древнегреческой мифологии
              </p>
            </div>
            <div className="text-6xl">⚡</div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === 'all'
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-card hover:bg-muted text-foreground'
              }`}
            >
              Все боги
            </button>
            {domains.slice(1).map((domain) => (
              <button
                key={domain}
                onClick={() => setFilter(domain)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === domain
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-card hover:bg-muted text-foreground'
                }`}
              >
                {domain}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredGods.map((god, index) => (
            <Card
              key={god.id}
              className="group cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-300 animate-fade-in border-2 hover:border-primary/50"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedGod(god)}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={god.image}
                  alt={god.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="text-4xl mb-3">{god.symbol}</div>
                <h3 className="text-2xl font-bold text-primary mb-1">
                  {god.name}
                </h3>
                <p className="text-sm text-muted-foreground italic mb-2">
                  {god.title}
                </p>
                <Badge variant="secondary" className="mb-3">
                  {god.domain}
                </Badge>
                <p className="text-sm text-foreground/80 line-clamp-3">
                  {god.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Dialog open={!!selectedGod} onOpenChange={() => setSelectedGod(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedGod && (
            <>
              <DialogHeader>
                <div className="flex items-start gap-4">
                  <div className="text-6xl">{selectedGod.symbol}</div>
                  <div>
                    <DialogTitle className="text-4xl mb-2">
                      {selectedGod.name}
                    </DialogTitle>
                    <p className="text-xl text-muted-foreground italic">
                      {selectedGod.title}
                    </p>
                    <Badge variant="secondary" className="mt-2">
                      {selectedGod.domain}
                    </Badge>
                  </div>
                </div>
              </DialogHeader>

              <div className="mt-6 space-y-6">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img
                    src={selectedGod.image}
                    alt={selectedGod.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h4 className="text-2xl font-semibold mb-3 flex items-center gap-2">
                    <Icon name="BookOpen" size={24} />
                    Описание
                  </h4>
                  <p className="text-lg leading-relaxed text-foreground/90">
                    {selectedGod.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-semibold mb-3 flex items-center gap-2">
                    <Icon name="Sparkles" size={24} />
                    Божественные силы
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedGod.powers.map((power, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-foreground/80"
                      >
                        <Icon name="Zap" size={16} className="text-secondary" />
                        {power}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-2xl font-semibold mb-3 flex items-center gap-2">
                    <Icon name="Scroll" size={24} />
                    Известные мифы
                  </h4>
                  <ul className="space-y-2">
                    {selectedGod.myths.map((myth, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-foreground/80"
                      >
                        <Icon name="ChevronRight" size={20} className="text-secondary mt-0.5" />
                        <span>{myth}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-2xl font-semibold mb-3 flex items-center gap-2">
                    <Icon name="Crown" size={24} />
                    Атрибуты и символы
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedGod.attributes.map((attr, idx) => (
                      <Badge key={idx} variant="outline" className="text-base py-1 px-3">
                        {attr}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <footer className="border-t mt-16 bg-card/50">
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
          <p className="text-sm">
            Энциклопедия древнегреческой мифологии • 12 богов Олимпа
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;