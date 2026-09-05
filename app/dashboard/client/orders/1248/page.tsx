'use client';

import { useState } from 'react';
import { ArrowLeft, CalendarDays, Check, Clock3, Download, MapPin, MessageCircle, Shirt, Star } from 'lucide-react';
import { Logo } from '../../../../_components/site-shell';

export default function OrderPage() {
  const [briefDone, setBriefDone] = useState(false);
  return <main className="order-page"><header className="checkout-head shell"><Logo/><a href="/dashboard/client">Личный кабинет</a></header><div className="shell crumbs"><a href="/dashboard/client"><ArrowLeft size={15}/> Мои съёмки</a><span>Заказ №1248</span></div><section className="order-title shell"><div><span className="status pending">Ожидает подтверждения</span><h1>Рассвет на крыше</h1><p>7 сентября · 06:00 · Москва-Сити</p></div><button><MessageCircle size={17}/> Написать фотографу</button></section>
    <section className="order-detail-grid shell"><div><article className="timeline-card"><h2>Что дальше</h2><ol><li className="done"><span><Check/></span><div><b>Заявка создана</b><small>4 сентября, 14:35</small></div></li><li className="current"><span>2</span><div><b>Фотограф подтверждает время</b><small>Обычно занимает до двух часов</small></div></li><li><span>3</span><div><b>Подготовка и съёмка</b><small>Заполните бриф заранее</small></div></li><li><span>4</span><div><b>Фотографии готовы</b><small>Закрытая галерея и архив</small></div></li></ol></article>
      <article className="brief-card"><div><span className="kicker">Подготовка</span><h2>Расскажите о своих пожеланиях</h2><p>Алина увидит ответы до съёмки и сможет подготовить маршрут и подсказки по образам.</p></div>{briefDone ? <span className="brief-done"><Check/> Бриф заполнен</span> : <button onClick={() => setBriefDone(true)}>Заполнить бриф</button>}<div className="brief-items"><span><Shirt/>Образы и одежда</span><span><Star/>Референсы</span><span><MessageCircle/>Пожелания</span></div></article>
    </div><aside><article className="order-side"><div className="maker-avatar mosaic-photo"/><h3>Алина Ветрова</h3><p>Ваш фотограф</p><span><Star size={14} fill="currentColor"/> 4,98 · 86 отзывов</span><hr/><dl><div><dt><CalendarDays/>Дата</dt><dd>7 сентября</dd></div><div><dt><Clock3/>Время</dt><dd>06:00–07:00</dd></div><div><dt><MapPin/>Место</dt><dd>Москва-Сити</dd></div></dl><a href="/photographers/alina-vetrova">Открыть профиль</a></article><button className="receipt"><Download/> Скачать чек</button></aside></section></main>;
}
