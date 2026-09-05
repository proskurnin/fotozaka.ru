import { ArrowRight, Clock3, MapPin, Sparkles } from 'lucide-react';
import { SiteFooter, SiteHeader } from '../_components/site-shell';
import { shoots } from '../data';

export default function ShootsPage() {
  return <main><SiteHeader compact/>
    <section className="page-top shoots-top shell"><div><span className="kicker">Готовые сценарии</span><h1>Выберите настроение,<br/><em>остальное мы собрали</em></h1><p>Фотограф, маршрут, лучший свет и понятный тайминг уже подобраны.</p></div><div className="mini-collage mosaic-photo"/></section>
    <section className="shoot-filters shell"><button className="active">Все идеи</button><button>Для двоих</button><button>Семейные</button><button>Портрет</button><button>Контент</button><button>В студии</button></section>
    <section className="shoots-grid shell">{shoots.map((s) => <a className={`shoot-card ${s.tone}`} href={`/shoots/${s.slug}`} key={s.slug}><div className="shoot-photo mosaic-photo" style={{backgroundPosition:s.crop}}/><div className="shoot-card-body"><span>{s.tag}</span><h2>{s.title}</h2><div><small><MapPin size={14}/>{s.place}</small><small><Clock3 size={14}/>{s.duration}</small></div><footer><strong>от {s.price.toLocaleString('ru-RU')} ₽</strong><i><ArrowRight size={18}/></i></footer></div></a>)}</section>
    <section className="concierge shell"><Sparkles size={26}/><div><h2>Не знаете, что выбрать?</h2><p>Ответьте на пять коротких вопросов — подберём идею, локацию и фотографа под вас.</p></div><a href="/search">Подобрать съёмку <ArrowRight size={17}/></a></section>
    <SiteFooter/></main>;
}
