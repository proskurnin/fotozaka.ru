'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight, CalendarDays, Check, MapPin, Sparkles, WalletCards } from 'lucide-react';
import { Logo } from '../_components/site-shell';
import { PhotoCard } from '../_components/photo-card';
import { photographers } from '../data';

const formats=['Портрет для себя','Love story','Семейная история','Контент для соцсетей','Свадьба','Пока не знаю'];
const moods=['Живо и без поз','Как в кино','Светло и минималистично','Ярко и смело'];
export default function RequestPage(){
 const [step,setStep]=useState(1);const [format,setFormat]=useState('');const [mood,setMood]=useState('');
 return <main className="request-page"><header className="checkout-head shell"><Logo/><span><Sparkles/>Персональный подбор</span></header>{step<5?<section className="request-card shell"><div className="request-progress"><span style={{width:`${step*25}%`}}/></div><a href={step===1?'/':'#'} onClick={(e)=>{if(step>1){e.preventDefault();setStep(step-1)}}}><ArrowLeft/>Назад</a><small>Шаг {step} из 4</small>
 {step===1&&<><h1>Что будем снимать?</h1><p>Можно выбрать примерно — уточним детали позже.</p><div className="choice-grid">{formats.map((x)=><button className={format===x?'active':''} onClick={()=>setFormat(x)} key={x}>{x}</button>)}</div></>}
 {step===2&&<><h1>Какое настроение ближе?</h1><p>Это поможет подобрать фотографа по стилю портфолио.</p><div className="mood-grid">{moods.map((x,i)=><button className={mood===x?'active':''} onClick={()=>setMood(x)} key={x}><span className={`mood-photo mood-${i+1} mosaic-photo`}/><b>{x}</b></button>)}</div></>}
 {step===3&&<><h1>Когда и где удобно?</h1><p>Покажем только тех, кто действительно свободен.</p><div className="request-fields"><label><CalendarDays/>Дата<input type="date" defaultValue="2026-09-07"/></label><label><MapPin/>Город<select><option>Москва</option><option>Санкт-Петербург</option><option>Казань</option></select></label><label><MapPin/>Локация<select><option>Помогите выбрать</option><option>Москва-Сити</option><option>Чистые пруды</option><option>Студия</option></select></label></div></>}
 {step===4&&<><h1>Какой бюджет комфортен?</h1><p>Покажем полную цену — вместе с локацией и выбранными опциями.</p><div className="budget-options"><button><WalletCards/><b>до 10 000 ₽</b><span>короткая прогулка или портрет</span></button><button className="active"><WalletCards/><b>10 000–20 000 ₽</b><span>самый большой выбор</span></button><button><WalletCards/><b>от 20 000 ₽</b><span>расширенные пакеты и команда</span></button></div><label className="request-note">Что ещё важно?<textarea placeholder="Например: снимаемся впервые, нужен визажист, будем с собакой"/></label></>}
 <button className="request-next" onClick={()=>setStep(step+1)} disabled={step===1&&!format||step===2&&!mood}>{step===4?'Получить 3 предложения':'Продолжить'}<ArrowRight/></button></section>:<section className="request-results shell"><div className="result-burst"><Check/></div><span className="kicker">Подбор готов</span><h1>Вот три лучших варианта</h1><p>{format||'Фотосессия'} · {mood||'живой стиль'} · Москва · 7 сентября</p><div className="three-reasons"><span><b>Лучший по стилю</b>Алина Ветрова</span><span><b>Оптимальный по цене</b>Лев Орлов</span><span><b>Самый опытный</b>Вера Белова</span></div><div className="cards-grid">{[photographers[0],photographers[2],photographers[3]].map((p)=><PhotoCard person={p} key={p.slug}/>)}</div><a className="primary-link" href="/compare">Сравнить предложения <ArrowRight/></a></section>}</main>
}
