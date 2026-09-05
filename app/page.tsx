'use client';

import { useMemo, useState } from 'react';
import { ArrowRight, CalendarDays, Check, Clock3, Heart, Images, LockKeyhole, MessageCircle, Navigation, Search, ShieldCheck, Sparkles, Star, UserRoundCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SiteFooter, SiteHeader } from './_components/site-shell';

type Photographer = { id: number; name: string; city: string; specialty: string; price: number; rating: number; reviews: number; next: string; shot: string; crop: string; };

const photographers: Photographer[] = [
  { id: 1, name: 'Алина Ветрова', city: 'Москва', specialty: 'Портреты · Love story', price: 8500, rating: 4.98, reviews: 86, next: 'сегодня в 18:30', shot: 'Тёплые истории без постановки', crop: '0% 0%' },
  { id: 2, name: 'Максим Корнеев', city: 'Москва', specialty: 'Семейные · Прогулки', price: 10500, rating: 4.95, reviews: 54, next: 'завтра в 11:00', shot: 'Живые семейные прогулки', crop: '100% 0%' },
  { id: 3, name: 'Лев Орлов', city: 'Санкт-Петербург', specialty: 'Контент · Мужской портрет', price: 7000, rating: 4.91, reviews: 41, next: '5 сентября', shot: 'Городской портрет как в кино', crop: '0% 100%' },
];

export default function Home() {
  const [city, setCity] = useState('Москва');
  const [date, setDate] = useState('');
  const [format, setFormat] = useState('Любая съёмка');
  const [favorites, setFavorites] = useState<number[]>([]);
  const [searched, setSearched] = useState(false);
  const [selected, setSelected] = useState<Photographer | null>(null);
  const results = useMemo(() => photographers.filter((item) => city === 'Все города' || item.city === city), [city]);
  const toggleFavorite = (id: number) => setFavorites((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);

  return (
    <main id="top">
      <SiteHeader />

      <section className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={15} /> Фотосессия без долгих поисков</div>
          <h1>Ваш фотограф.<br /><em>Ваше время.</em></h1>
          <p>Выберите стиль, локацию и свободное окно — всё остальное уже продумано.</p>
          <div className="trust-row"><span><ShieldCheck size={18} /> Проверенные фотографы</span><span><Check size={18} /> Цена известна заранее</span></div>
        </div>
        <div className="hero-visual" aria-label="Примеры фотосессий">
          <div className="hero-photo mosaic-photo" />
          <div className="floating-note note-top"><span className="status-dot" /> 248 свободных окон на неделе</div>
          <div className="floating-note note-bottom"><span className="tiny-stars">★★★★★</span><strong>4,9</strong> средняя оценка</div>
        </div>
      </section>

      <section className="search-wrap shell" aria-label="Поиск фотографа">
        <div className="search-panel">
          <label><span>Город</span><select value={city} onChange={(event) => setCity(event.target.value)}><option>Москва</option><option>Санкт-Петербург</option><option>Все города</option></select></label>
          <label><span>Дата</span><input type="date" value={date} onChange={(event) => setDate(event.target.value)} aria-label="Дата съёмки" /></label>
          <label><span>Формат</span><select value={format} onChange={(event) => setFormat(event.target.value)}><option>Любая съёмка</option><option>Портрет</option><option>Love story</option><option>Семейная</option><option>Контент</option></select></label>
          <Button className="search-button" onClick={() => { setSearched(true); window.location.href = `/search?city=${encodeURIComponent(city)}&format=${encodeURIComponent(format)}&date=${date}`; }}><Search size={18} /> Найти фотографа</Button>
        </div>
        <div className="quick-filters"><span>Часто ищут:</span><button>до 10 000 ₽</button><button>сегодня</button><button>с фотостудией</button><button>отдаёт фото за 7 дней</button></div>
      </section>

      <section id="catalog" className="catalog shell">
        <div className="section-heading"><div><span className="kicker">Подобраны под ваш запрос</span><h2>{searched ? `Фотографы: ${city}` : 'Фотографы, которых выбирают снова'}</h2></div><a className="text-link" href="/search">Смотреть всех <ArrowRight size={17} /></a></div>
        <div className="cards-grid">
          {results.map((person) => <article className="photographer-card" key={person.id}>
            <div className="card-image mosaic-photo" style={{ backgroundPosition: person.crop }}>
              <span className="available-badge"><span /> Свободен {person.next}</span>
              <button className={`favorite ${favorites.includes(person.id) ? 'is-active' : ''}`} onClick={() => toggleFavorite(person.id)} aria-label={favorites.includes(person.id) ? `Убрать ${person.name} из избранного` : `Добавить ${person.name} в избранное`}><Heart size={18} fill={favorites.includes(person.id) ? 'currentColor' : 'none'} /></button>
              <p>{person.shot}</p>
            </div>
            <div className="card-body"><div className="card-title-row"><div><h3>{person.name}</h3><span>{person.specialty}</span></div><div className="rating"><Star size={15} fill="currentColor" /> {person.rating}<small>({person.reviews})</small></div></div><div className="card-footer"><span>от <strong>{person.price.toLocaleString('ru-RU')} ₽</strong> / час</span><a href={`/photographers/${person.id === 1 ? 'alina-vetrova' : person.id === 2 ? 'maxim-korneev' : 'lev-orlov'}`} aria-label={`Открыть профиль ${person.name}`}><ArrowRight size={18} /></a></div></div>
          </article>)}
        </div>
      </section>

      <section id="ideas" className="ideas-section">
        <div className="shell">
          <div className="section-heading"><div><span className="kicker">Сценарии уже собраны</span><h2>Выберите не фотографа, а настроение</h2></div><p className="section-aside">Готовая локация, понятный тайминг и фотограф, который уже знает лучший свет.</p></div>
          <div className="idea-grid">
            <article className="idea-card idea-one"><div><span>Бестселлер</span><h3>Рассвет на крыше</h3><p>Москва-Сити · 60 минут · от 9 900 ₽</p><a href="/shoots/rooftop-sunrise">Посмотреть даты <ArrowRight size={16} /></a></div></article>
            <article className="idea-card idea-two"><div><span>Для двоих</span><h3>Прогулка как в кино</h3><p>Чистые пруды · 90 минут · от 12 000 ₽</p><a href="/shoots/cinema-walk">Посмотреть даты <ArrowRight size={16} /></a></div></article>
            <article className="idea-card idea-three"><div><span>Новый формат</span><h3>Контент на месяц</h3><p>Студия включена · 2 часа · от 16 500 ₽</p><a href="/shoots/content-month">Посмотреть даты <ArrowRight size={16} /></a></div></article>
          </div>
        </div>
      </section>

      <section className="pro-section shell">
        <div className="pro-copy">
          <span className="kicker">Кабинет фотографа</span>
          <h2>Записи, оплаты и клиенты — в одном календаре</h2>
          <p>Фотограф задаёт рабочие часы, время на дорогу и обработку. ФотоЗака показывает клиентам только те слоты, в которые действительно можно записаться.</p>
          <ul><li><Check size={16} /> Буфер между локациями без накладок</li><li><Check size={16} /> Предоплата и автоматические напоминания</li><li><Check size={16} /> Синхронизация с личным календарём</li></ul>
          <a className="pro-button button-link" href="/dashboard/photographer">Открыть кабинет фотографа <ArrowRight size={17} /></a>
        </div>
        <div className="calendar-demo" aria-label="Пример календаря фотографа">
          <div className="calendar-head"><div><small>Сентябрь</small><strong>Неделя 7–13</strong></div><div className="calendar-nav">‹ <span>Сегодня</span> ›</div></div>
          <div className="week-row"><span>Пн<small>7</small></span><span>Вт<small>8</small></span><span className="active">Ср<small>9</small></span><span>Чт<small>10</small></span><span>Пт<small>11</small></span></div>
          <div className="schedule-grid">
            <div className="time-column"><span>10:00</span><span>13:00</span><span>16:00</span><span>19:00</span></div>
            <div className="day-column"><div className="booking booking-a"><small>10:30 · 1,5 ч</small><strong>Love story</strong><span>Чистые пруды</span></div><div className="booking booking-b"><small>16:00 · 2 ч</small><strong>Контент-съёмка</strong><span>Студия 18</span></div></div>
            <div className="day-column muted-day"><span className="free-slot">Свободно</span><div className="booking booking-c"><small>13:00 · 1 ч</small><strong>Портрет</strong><span>Хлебозавод</span></div></div>
            <div className="day-column"><div className="booking booking-d"><small>11:00 · 2 ч</small><strong>Семейная</strong><span>Коломенское</span></div><span className="free-slot lower">Свободно</span></div>
          </div>
        </div>
      </section>

      <section className="trust-section">
        <div className="shell trust-grid">
          <article><UserRoundCheck size={25} /><h3>Рейтинг в обе стороны</h3><p>После съёмки фотограф и клиент оценивают друг друга. Комментарии о пунктуальности видит только следующая сторона сделки.</p></article>
          <article><Navigation size={25} /><h3>Умные локации</h3><p>Показываем время в пути, стоимость студии, разрешения на съёмку и лучшее время по свету.</p></article>
          <article><MessageCircle size={25} /><h3>Бриф до съёмки</h3><p>Референсы, одежда и пожелания собираются заранее — меньше переписки, больше совпадения с ожиданиями.</p></article>
        </div>
      </section>

      <section className="gallery-future shell">
        <div className="future-visual"><LockKeyhole size={26} /><div className="future-thumbs"><span/><span/><span/></div><div className="future-progress"><i /></div></div>
        <div className="future-copy"><span className="soon-badge">Скоро</span><h2>Личная галерея после съёмки</h2><p>Фотограф загрузит готовые материалы в закрытый альбом. Клиент получит ссылку и код, сможет отметить любимые кадры и скачать архив в срок хранения.</p><div className="future-steps"><span><strong>01</strong>Приватная ссылка</span><span><strong>02</strong>Выбор кадров</span><span><strong>03</strong>Скачивание архива</span></div><button disabled><Images size={17} /> Галерея появится в следующей версии</button></div>
      </section>

      <section id="how" className="promise-strip"><div className="shell promise-inner">
        <div><CalendarDays size={23} /><span><strong>Реальный календарь</strong>Только свободные даты</span></div><div><ShieldCheck size={23} /><span><strong>Безопасная бронь</strong>Деньги после подтверждения</span></div><div><Star size={23} /><span><strong>Честные отзывы</strong>Только после состоявшейся съёмки</span></div>
      </div></section>

      <section className="final-cta"><div className="shell"><div><span>Готовы к съёмке?</span><h2>Найдите своего фотографа за пару минут</h2></div><Button onClick={() => window.scrollTo({ top: 420, behavior: 'smooth' })}>Выбрать дату <ArrowRight size={18} /></Button></div></section>

      <SiteFooter />

      {selected && <div className="profile-overlay" role="presentation" onMouseDown={() => setSelected(null)}>
        <section className="profile-dialog" role="dialog" aria-modal="true" aria-labelledby="profile-title" onMouseDown={(event) => event.stopPropagation()}>
            <button className="profile-close" onClick={() => setSelected(null)} aria-label="Закрыть профиль">×</button>
            <header><h2 id="profile-title" className="profile-title">{selected.name}</h2><p>{selected.specialty} · {selected.city}</p></header>
            <div className="profile-portfolio"><div className="mosaic-photo" style={{ backgroundPosition: selected.crop }} /><div className="mosaic-photo" style={{ backgroundPosition: '50% 100%' }} /><div className="mosaic-photo" style={{ backgroundPosition: '100% 100%' }} /></div>
            <div className="profile-meta"><span><Star size={16} fill="currentColor" /> {selected.rating} · {selected.reviews} отзывов</span><span><Clock3 size={16} /> Отдаёт фото за 7–10 дней</span><span><ShieldCheck size={16} /> Личность проверена</span></div>
            <p className="profile-about">Помогаю с идеей, одеждой и маршрутом. На съёмке много движения и минимум сложных поз — получаются живые фотографии, в которых вы узнаёте себя.</p>
            <div className="slots"><div><strong>Ближайшие окна</strong><span>Цена от {selected.price.toLocaleString('ru-RU')} ₽ / час</span></div><button>Сегодня, 18:30</button><button>Завтра, 11:00</button><button>5 сен, 16:00</button></div>
            <a className="profile-book button-link" href="/booking">Выбрать время и забронировать <ArrowRight size={17} /></a>
        </section>
      </div>}
    </main>
  );
}
