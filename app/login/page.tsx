'use client';

import { useState } from 'react';
import { ArrowRight, Camera, Check, KeyRound, Mail } from 'lucide-react';
import { Logo } from '../_components/site-shell';

export default function LoginPage() {
  const [sent, setSent] = useState(false);
  return <main className="auth-page"><section className="auth-visual"><Logo/><div className="auth-photo mosaic-photo"/><blockquote>«Наконец-то нашла фотографа и свободное время за один вечер»<footer>Екатерина, съёмка в Москве</footer></blockquote></section><section className="auth-form"><div className="auth-inner"><Logo/><span className="eyebrow"><KeyRound size={14}/> Вход без пароля</span>{sent ? <div className="auth-sent"><span><Check size={28}/></span><h1>Проверьте почту</h1><p>Отправили ссылку для входа на <b>roman@example.ru</b>. Она будет действовать 15 минут.</p><button onClick={() => setSent(false)}>Указать другую почту</button></div> : <><h1>Рады видеть вас</h1><p>Один кабинет для заказов, переписки и готовых фотографий.</p><label>Электронная почта<div><Mail size={18}/><input type="email" placeholder="name@example.ru"/></div></label><button className="auth-submit" onClick={() => setSent(true)}>Получить ссылку для входа <ArrowRight size={18}/></button><div className="auth-or"><span/>или<span/></div><a className="social-login" href="/dashboard/client">Продолжить через Яндекс</a><small>Нажимая кнопку, вы принимаете условия сервиса и политику конфиденциальности.</small></>}</div></section></main>;
}
