'use client';

import { useMemo, useState } from 'react';
import { ArrowRight, Clock3, MapPin, Navigation, Search, SunMedium } from 'lucide-react';
import { SiteFooter, SiteHeader } from '../_components/site-shell';
import { locations } from '../data';

export default function LocationsPage(){
  const [type,setType]=useState('Все');
  const filtered=useMemo(()=>locations.filter((l)=>type==='Все'||l.type===type),[type]);
  return <main><SiteHeader compact/><section className="locations-hero shell"><div><span className="kicker">Умные локации</span><h1>Место, где всё<br/><em>сложится в кадр</em></h1><p>Лучший свет, правила, аренда, парковка и фотографы, которые уже знают каждую точку.</p><div className="location-search"><Search/><input placeholder="Найти парк, студию или район"/><button>Найти</button></div></div><div className="location-orbit"><div className="orbit-photo mosaic-photo"/><span className="orbit-note one"><SunMedium/> лучший свет 06:00</span><span className="orbit-note two"><Navigation/> маршрут готов</span></div></section>
  <nav className="shoot-filters shell">{['Все','Город','Парк','Студия','Прогулка'].map((item)=><button className={type===item?'active':''} onClick={()=>setType(item)} key={item}>{item}</button>)}</nav>
  <section className="locations-grid shell">{filtered.map((l)=><a className="location-tile" href={`/locations/${l.slug}`} key={l.slug}><div className="location-tile-photo mosaic-photo" style={{backgroundPosition:l.crop}}><span>{l.type}</span></div><div className="location-tile-body"><div><h2>{l.name}</h2><p><MapPin/>{l.city}</p></div><strong>{l.price?`аренда ${l.price.toLocaleString('ru-RU')} ₽/ч`:'бесплатно'}</strong><div className="location-data"><span><SunMedium/> {l.best}</span><span><Clock3/> {l.shoots} съёмок</span></div><footer><small>{l.tags.join(' · ')}</small><i><ArrowRight/></i></footer></div></a>)}</section><SiteFooter/></main>;
}
