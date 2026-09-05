export type Photographer = {
  slug: string;
  name: string;
  city: string;
  specialty: string;
  price: number;
  rating: number;
  reviews: number;
  next: string;
  shot: string;
  crop: string;
  verified?: boolean;
  delivery: number;
  completed: number;
  response: string;
  confirmation: number;
  locations: string[];
  packages: { name: string; duration: string; price: number; includes: string }[];
};

export const photographers: Photographer[] = [
  { slug: 'alina-vetrova', name: 'Алина Ветрова', city: 'Москва', specialty: 'Портреты · Love story', price: 8500, rating: 4.98, reviews: 86, next: 'сегодня в 18:30', shot: 'Тёплые истории без постановки', crop: '0% 0%', verified: true, delivery: 7, completed: 127, response: '15 минут', confirmation: 98, locations: ['Москва-Сити', 'Чистые пруды', 'Хлебозавод'], packages: [{ name:'Портретная прогулка', duration:'60 минут', price:8500, includes:'50+ кадров · маршрут' },{ name:'Love story', duration:'90 минут', price:12000, includes:'70+ кадров · 2 образа' },{ name:'Контент на месяц', duration:'2 часа', price:16500, includes:'90+ кадров · короткие видео' }] },
  { slug: 'maxim-korneev', name: 'Максим Корнеев', city: 'Москва', specialty: 'Семейные · Прогулки', price: 10500, rating: 4.95, reviews: 54, next: 'завтра в 11:00', shot: 'Живые семейные прогулки', crop: '100% 0%', verified: true, delivery: 10, completed: 92, response: '28 минут', confirmation: 96, locations: ['Коломенское','ВДНХ','Чистые пруды'], packages: [{ name:'Семейная прогулка',duration:'90 минут',price:12500,includes:'70+ кадров · до 5 человек'},{name:'Домашняя история',duration:'2 часа',price:17000,includes:'100+ кадров · выезд' }] },
  { slug: 'lev-orlov', name: 'Лев Орлов', city: 'Санкт-Петербург', specialty: 'Контент · Мужской портрет', price: 7000, rating: 4.91, reviews: 41, next: '5 сентября', shot: 'Городской портрет как в кино', crop: '0% 100%', delivery: 6, completed: 68, response: '40 минут', confirmation: 91, locations: ['Севкабель Порт','Новая Голландия'], packages: [{name:'Городской портрет',duration:'60 минут',price:7000,includes:'45+ кадров'},{name:'Контент-съёмка',duration:'2 часа',price:13500,includes:'3 образа · видео'}] },
  { slug: 'vera-belova', name: 'Вера Белова', city: 'Москва', specialty: 'Свадьбы · Репортаж', price: 14000, rating: 4.96, reviews: 72, next: '7 сентября', shot: 'День, к которому хочется вернуться', crop: '50% 100%', verified: true, delivery: 21, completed: 116, response: '12 минут', confirmation: 99, locations: ['Царицыно','Москва-Сити'], packages: [{name:'Регистрация и прогулка',duration:'4 часа',price:48000,includes:'250+ кадров · тизер'},{name:'Полный день',duration:'10 часов',price:110000,includes:'600+ кадров · фотокнига'}] },
  { slug: 'nikita-azarov', name: 'Никита Азаров', city: 'Казань', specialty: 'Fashion · Контент', price: 9000, rating: 4.89, reviews: 35, next: '8 сентября', shot: 'Смелый визуал для личного бренда', crop: '50% 0%', delivery: 5, completed: 51, response: '1 час', confirmation: 89, locations: ['Кремлёвская набережная'], packages:[{name:'Контент для эксперта',duration:'2 часа',price:16000,includes:'80+ кадров · 5 видео'}] },
  { slug: 'maria-sokolova', name: 'Мария Соколова', city: 'Санкт-Петербург', specialty: 'Семейные · Детские', price: 9500, rating: 4.97, reviews: 103, next: 'завтра в 15:00', shot: 'Семейные кадры без суеты', crop: '100% 100%', verified: true, delivery: 8, completed: 149, response: '20 минут', confirmation: 97, locations: ['Новая Голландия','Летний сад'], packages:[{name:'Семейная прогулка',duration:'90 минут',price:12500,includes:'80+ кадров · до 6 человек'}] },
];

export const locations = [
  { slug:'moscow-city', name:'Москва-Сити', city:'Москва', type:'Город', price:0, best:'05:30–08:00', permit:'Не требуется', indoor:'Афимолл', parking:'Платная парковка', crop:'0% 100%', shoots:48, photographers:17, tags:['Архитектура','Рассвет','Портрет'] },
  { slug:'chistye-prudy', name:'Чистые пруды', city:'Москва', type:'Прогулка', price:0, best:'17:30–20:00', permit:'Не требуется', indoor:'Кафе по маршруту', parking:'Метро 4 минуты', crop:'50% 100%', shoots:73, photographers:24, tags:['Love story','Прогулка','Семья'] },
  { slug:'studio-18', name:'Студия 18', city:'Москва', type:'Студия', price:2400, best:'Любое время', permit:'Включено', indoor:'Да', parking:'Бесплатная', crop:'50% 0%', shoots:112, photographers:31, tags:['Контент','Fashion','Портрет'] },
  { slug:'kolomenskoe', name:'Коломенское', city:'Москва', type:'Парк', price:0, best:'07:00–10:00', permit:'Для коммерции', indoor:'Нет', parking:'У входа', crop:'100% 0%', shoots:64, photographers:22, tags:['Семья','Дети','Прогулка'] },
  { slug:'hlebzavod', name:'Хлебозавод', city:'Москва', type:'Город', price:0, best:'15:00–19:00', permit:'Не требуется', indoor:'Общие зоны', parking:'Платная', crop:'0% 0%', shoots:39, photographers:15, tags:['Портрет','Контент','Мужской'] },
  { slug:'white-studio', name:'Белая студия', city:'Москва', type:'Студия', price:3200, best:'Любое время', permit:'Включено', indoor:'Да', parking:'Бесплатная', crop:'100% 100%', shoots:85, photographers:28, tags:['Минимализм','Портрет','Бренд'] },
];

export const addOns = [
  { id:'makeup', name:'Макияж и укладка', specialist:'Анна Лебедева', price:4500, time:'90 минут' },
  { id:'stylist', name:'Разбор и подбор образа', specialist:'Ольга Миронова', price:3500, time:'онлайн' },
  { id:'dress', name:'Аренда образа', specialist:'Dress Up Moscow', price:2900, time:'на сутки' },
  { id:'book', name:'Фотокнига 20×20', specialist:'ФотоЗака Print', price:5900, time:'10 разворотов' },
];

export const shoots = [
  { slug: 'rooftop-sunrise', title: 'Рассвет на крыше', tag: 'Бестселлер', place: 'Москва-Сити', duration: '60 минут', price: 9900, crop: '0% 100%', tone: 'idea-one' },
  { slug: 'cinema-walk', title: 'Прогулка как в кино', tag: 'Для двоих', place: 'Чистые пруды', duration: '90 минут', price: 12000, crop: '50% 100%', tone: 'idea-two' },
  { slug: 'content-month', title: 'Контент на месяц', tag: 'Новый формат', place: 'Студия 18', duration: '2 часа', price: 16500, crop: '50% 0%', tone: 'idea-three' },
  { slug: 'family-picnic', title: 'Семейный пикник', tag: 'С детьми', place: 'Коломенское', duration: '90 минут', price: 11500, crop: '100% 0%', tone: 'idea-four' },
  { slug: 'night-neon', title: 'Ночной неон', tag: 'Город', place: 'Китай-город', duration: '60 минут', price: 8900, crop: '0% 0%', tone: 'idea-five' },
  { slug: 'minimal-studio', title: 'Минимализм в студии', tag: 'Портрет', place: 'Белая студия', duration: '60 минут', price: 10800, crop: '100% 100%', tone: 'idea-six' },
];
