import type { Metadata } from 'next';
import { ArrowLeft, Award, BadgeCheck, CalendarDays, Check, Clock3, Heart, MessageCircle, ShieldCheck, Star, TrendingUp } from 'lucide-react';
import { SiteFooter, SiteHeader } from '../../_components/site-shell';

export const metadata: Metadata = { title: 'Алина Ветрова — фотограф в Москве | ФотоЗака', description: 'Портреты и love story от Алины Ветровой. Рейтинг 4,98, ближайшие свободные даты и портфолио.' };

export default function PhotographerPage() {
  return <main><SiteHeader compact/>
    <div className="shell crumbs"><a href="/search"><ArrowLeft size={15}/> Все фотографы</a><span>Москва · Портреты</span></div>
    <section className="profile-hero shell"><div className="profile-gallery"><div className="mosaic-photo main-shot"/><div className="mosaic-photo side-shot one"/><div className="mosaic-photo side-shot two"/><button>Смотреть все 42 работы</button></div>
      <aside className="profile-summary"><div className="profile-name"><div><span className="kicker">Фотограф в Москве</span><h1>Алина Ветрова <BadgeCheck size={21}/></h1><p>Портреты · Love story · Прогулки</p></div><button aria-label="Добавить в избранное"><Heart size={20}/></button></div>
        <div className="profile-score"><strong><Star size={17} fill="currentColor"/> 4,98</strong><a href="#reviews">86 отзывов</a><span>127 съёмок на ФотоЗака</span></div>
        <p className="profile-intro">Помогаю с идеей, одеждой и маршрутом. На съёмке много движения и минимум сложных поз — получаются живые фотографии, в которых вы узнаёте себя.</p>
        <div className="profile-facts"><span><Clock3 size={17}/><b>7 дней</b><small>средний срок готовности</small></span><span><ShieldCheck size={17}/><b>Проверена</b><small>личность и портфолио</small></span><span><MessageCircle size={17}/><b>≈ 15 минут</b><small>обычно отвечает</small></span></div>
        <div className="proof-line"><span><TrendingUp/>98% заявок подтверждено</span><span><Check/>Цена не менялась после брони</span><span><Award/>Выбор редакции</span></div>
        <div className="price-box"><div><span>Стоимость съёмки</span><strong>8 500 ₽ <small>/ час</small></strong></div><a href="/booking">Выбрать время</a></div>
      </aside>
    </section>
    <section className="profile-content shell"><div className="profile-main"><nav className="tab-line"><a href="#portfolio">Портфолио</a><a href="#services">Услуги</a><a href="#reviews">Отзывы</a></nav>
      <div id="services" className="content-block"><h2>Форматы съёмки</h2><div className="service-list"><article><div><h3>Портретная прогулка</h3><p>Маршрут, помощь с образом, 50+ фотографий</p></div><span>60 мин</span><strong>8 500 ₽</strong></article><article><div><h3>Love story</h3><p>Подготовка идеи, 2 образа, 70+ фотографий</p></div><span>90 мин</span><strong>12 000 ₽</strong></article><article><div><h3>Контент-съёмка</h3><p>3 образа, вертикальные кадры, короткие видео</p></div><span>2 часа</span><strong>16 500 ₽</strong></article></div></div>
      <div id="reviews" className="content-block"><div className="review-heading"><h2>Отзывы после съёмок</h2><span><Star size={18} fill="currentColor"/> 4,98 из 5</span></div><div className="review-dimensions"><span><b>5,0</b>Результат</span><span><b>4,9</b>Комфорт</span><span><b>5,0</b>Пунктуальность</span><span><b>4,9</b>Срок обработки</span></div><div className="reviews"><article><header><b>Екатерина <Check size={13}/></b><span>★★★★★</span><small>Заказ подтверждён · 24 августа</small></header><p>Алина сразу сняла напряжение и помогла с позами. Получилось легко, тепло и совсем не постановочно.</p></article><article><header><b>Илья <Check size={13}/></b><span>★★★★★</span><small>Заказ подтверждён · 11 августа</small></header><p>Маршрут был продуман до минуты, а первые кадры получили уже на следующий день. Всё очень спокойно и профессионально.</p></article></div></div>
    </div><aside className="availability-card"><header><CalendarDays size={19}/><div><strong>Ближайшие окна</strong><span>часовой пояс Москвы</span></div></header><div className="date-row"><b>Сегодня, 4 сентября</b><button>18:30</button><button>20:00</button></div><div className="date-row"><b>Завтра, 5 сентября</b><button>11:00</button><button>16:00</button></div><div className="date-row"><b>Суббота, 7 сентября</b><button>09:30</button><button>17:30</button></div><a href="/booking">Показать весь календарь</a><small><Check size={14}/> Бронь подтверждает фотограф</small></aside></section>
    <SiteFooter/></main>;
}
