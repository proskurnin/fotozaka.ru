import { Camera, ChevronDown, MapPin } from 'lucide-react';

export function Logo() {
  return <a href="/" className="brand" aria-label="ФотоЗака — на главную"><span className="brand-mark"><Camera size={19} /></span><span>фото<span>зака</span></span></a>;
}

export function SiteHeader({ compact = false }: { compact?: boolean }) {
  return <header className={`site-header ${compact ? 'compact-header' : ''}`}><div className="shell header-inner">
    <Logo />
    <nav aria-label="Главная навигация"><a href="/search">Фотографы</a><a href="/shoots">Готовые съёмки</a><a href="/locations">Локации</a><a href="/collections">Подборки</a></nav>
    <div className="header-actions"><a className="city-pill" href="/search"><MapPin size={15} /> Москва <ChevronDown size={14} /></a><a className="login-link" href="/login">Войти</a><a className="join-link" href="/request">Подобрать за меня</a></div>
  </div></header>;
}

export function SiteFooter() {
  return <footer><div className="shell footer-inner"><Logo /><p>Фотосессии с понятной ценой и свободными датами.</p><div><a href="/search">Фотографы</a><a href="/shoots">Съёмки</a><a href="/locations">Локации</a><a href="/dashboard/photographer">Фотографам</a></div><small>© 2026 ФотоЗака</small></div></footer>;
}
