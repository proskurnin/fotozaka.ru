import { ArrowRight, BadgeCheck, Clock3, Star } from 'lucide-react';
import type { Photographer } from '../data';

export function PhotoCard({ person, selected = false, onCompare }: { person: Photographer; selected?: boolean; onCompare?: (slug:string) => void }) {
  return <article className="photographer-card">
    <a className="card-image mosaic-photo" style={{ backgroundPosition: person.crop }} href={`/photographers/${person.slug}`}>
      <span className="available-badge"><span /> Свободен {person.next}</span>
      <p>{person.shot}</p>
    </a>
    <div className="card-body"><div className="card-title-row"><div><h3>{person.name} {person.verified && <BadgeCheck size={16} className="verified" />}</h3><span>{person.specialty}</span></div><div className="rating"><Star size={15} fill="currentColor" /> {person.rating}<small>({person.reviews})</small></div></div>
      <div className="card-trust"><span><Clock3 size={13}/> Фото за {person.delivery} дней</span><span>{person.confirmation}% заявок подтверждено</span></div>
      <div className="card-footer"><span>полная цена от <strong>{person.price.toLocaleString('ru-RU')} ₽</strong></span>{onCompare && <button className={`compare-check ${selected?'selected':''}`} onClick={() => onCompare(person.slug)}>{selected?'Добавлен':'Сравнить'}</button>}<a href={`/photographers/${person.slug}`} aria-label={`Открыть профиль ${person.name}`}><ArrowRight size={18} /></a></div></div>
  </article>;
}
