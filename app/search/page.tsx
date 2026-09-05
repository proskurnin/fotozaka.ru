'use client';

import { useMemo, useState } from 'react';
import { CalendarDays, ChevronDown, ListFilter, Map, Search, SlidersHorizontal, Sparkles, X } from 'lucide-react';
import { PhotoCard } from '../_components/photo-card';
import { SiteFooter, SiteHeader } from '../_components/site-shell';
import { photographers } from '../data';

export default function SearchPage() {
  const [city, setCity] = useState('Москва');
  const [date, setDate] = useState('2026-09-07');
  const [format, setFormat] = useState('Все форматы');
  const [location, setLocation] = useState('Любая локация');
  const [budget, setBudget] = useState('Любой бюджет');
  const [fast, setFast] = useState(false);
  const [verified, setVerified] = useState(false);
  const [compare, setCompare] = useState<string[]>([]);
  const filtered = useMemo(() => photographers.filter((p) =>
    (city === 'Все города' || p.city === city) &&
    (format === 'Все форматы' || p.specialty.includes(format)) &&
    (location === 'Любая локация' || p.locations.includes(location)) &&
    (budget !== 'до 10 000 ₽' || p.price <= 10000) &&
    (!fast || p.delivery <= 7) && (!verified || p.verified)
  ), [city, format, location, budget, fast, verified]);
  const reset = () => { setCity('Москва'); setFormat('Все форматы'); setLocation('Любая локация'); setBudget('Любой бюджет'); setFast(false); setVerified(false); };
  const toggleCompare = (slug:string) => setCompare((current) => current.includes(slug) ? current.filter((id) => id !== slug) : current.length < 3 ? [...current, slug] : current);

  return <main><SiteHeader compact />
    <section className="search-first shell"><div><span className="kicker">Поиск от реального календаря</span><h1>Кто свободен<br/><em>в нужный день?</em></h1><p>Сначала дата и место — затем только подходящие фотографы с окончательной ценой.</p></div><div className="date-first-card"><CalendarDays/><label>Дата съёмки<input type="date" value={date} onChange={(e)=>setDate(e.target.value)}/></label><span><b>18 фотографов свободны</b>в Москве 7 сентября</span></div></section>
    <section className="catalog-layout shell">
      <aside className="filters-panel"><div className="filters-title"><strong><SlidersHorizontal size={17}/> Фильтры</strong><button onClick={reset}><X size={14}/> Сбросить</button></div>
        <label><span>Город</span><select value={city} onChange={(e) => setCity(e.target.value)}><option>Все города</option><option>Москва</option><option>Санкт-Петербург</option><option>Казань</option></select><ChevronDown size={14}/></label>
        <label><span>Формат</span><select value={format} onChange={(e) => setFormat(e.target.value)}><option>Все форматы</option><option>Портрет</option><option>Love story</option><option>Семейные</option><option>Контент</option><option>Свадьбы</option></select><ChevronDown size={14}/></label>
        <label><span>Локация</span><select value={location} onChange={(e) => setLocation(e.target.value)}><option>Любая локация</option><option>Москва-Сити</option><option>Чистые пруды</option><option>Коломенское</option><option>Хлебозавод</option></select><ChevronDown size={14}/></label>
        <label><span>Полная стоимость</span><select value={budget} onChange={(e) => setBudget(e.target.value)}><option>Любой бюджет</option><option>до 10 000 ₽</option></select><ChevronDown size={14}/></label>
        <fieldset><legend>Важно для меня</legend><label className="check-row"><input type="checkbox" checked={fast} onChange={(e)=>setFast(e.target.checked)}/> Фото до 7 дней</label><label className="check-row"><input type="checkbox" checked={verified} onChange={(e)=>setVerified(e.target.checked)}/> Личность проверена</label><label className="check-row"><input type="checkbox"/> Студия включена</label><label className="check-row"><input type="checkbox"/> Поможет с образом</label></fieldset>
        <a className="reverse-search" href="/request"><Sparkles/> Не хотите искать?<b>Получить 3 предложения</b></a>
      </aside>
      <div className="results-area"><div className="results-bar"><div><strong>{filtered.length} фотографов свободны</strong><span>{date ? '7 сентября · ' : ''}{city}</span></div><div className="view-switch"><button className="active"><ListFilter size={16}/> Список</button><button><Map size={16}/> Карта</button></div></div>
        {filtered.length ? <div className="result-grid">{filtered.map((p) => <PhotoCard person={p} key={p.slug} selected={compare.includes(p.slug)} onCompare={toggleCompare}/>)}</div> : <div className="empty-state"><Search size={30}/><h2>На эту дату никого не нашли</h2><p>Попробуйте соседний день или расширьте бюджет.</p><button onClick={reset}>Сбросить фильтры</button></div>}
      </div>
    </section>
    {compare.length>0 && <div className="compare-dock"><div><span>{compare.map((slug)=><i key={slug}>{photographers.find((p)=>p.slug===slug)?.name.split(' ')[0]}</i>)}</span><small>Можно добавить до трёх фотографов</small></div><a href={`/compare?ids=${compare.join(',')}`}>Сравнить {compare.length}</a></div>}
    <SiteFooter/></main>;
}
