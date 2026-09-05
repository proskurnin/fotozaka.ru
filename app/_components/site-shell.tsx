import { Camera, ChevronDown, MapPin } from 'lucide-react';

export function Logo() {
  return <a href="/" className="brand" aria-label="ФотоЗака — на главную"><span className="brand-mark"><Camera size={19} /></span><span>фото<span>зака</span></span></a>;
}

export function SiteHeader({ compact = false }: { compact?: boolean }) {
  return <header className={`site-header ${compact ? 'compact-header' : ''}`}><div className="shell header-inner">
    <Logo />
    <nav aria-label="Главная навигация"><a href="/search">Фотографы</a><a href="/shoots">Готовые съёмки</a><a href="/locations">Локации</a><a href="/collections">Подборки</a><a href="/how-it-works">Как это работает</a></nav>
    <div className="header-actions"><a className="city-pill" href="/search"><MapPin size={15} /> Москва <ChevronDown size={14} /></a><a className="login-link" href="/login">Войти</a><a className="join-link" href="/request">Подобрать за меня</a></div>
  </div></header>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="shell footer-inner"><Logo /><p>Фотосессии с понятной ценой и свободными датами.</p><div className="footer-links"><span><b>Клиентам</b><a href="/search">Фотографы</a><a href="/shoots">Съёмки</a><a href="/locations">Локации</a><a href="/help">Помощь</a></span><span><b>Фотографам</b><a href="/auth/register-photographer">Стать фотографом</a><a href="/dashboard/photographer">Кабинет</a><a href="/legal/photographers">Правила</a></span><span><b>ФотоЗака</b><a href="/about">О проекте</a><a href="/how-it-works">Как это работает</a><a href="/contacts">Контакты</a><a href="/legal/privacy">Конфиденциальность</a></span></div><small>© 2026 ФотоЗака</small></div></footer>;
}
