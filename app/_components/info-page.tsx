import type { ReactNode } from 'react';
import { ArrowRight, Mail, MessageCircle, ShieldCheck } from 'lucide-react';
import { SiteFooter, SiteHeader } from './site-shell';

export function InfoPage({eyebrow,title,intro,children}:{eyebrow:string;title:string;intro:string;children:ReactNode}){return <main><SiteHeader compact/><section className="info-hero shell"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{intro}</p></section><section className="info-content shell">{children}</section><SiteFooter/></main>}
export function SupportCard(){return <aside className="support-card"><MessageCircle/><h2>Остались вопросы?</h2><p>Поддержка отвечает ежедневно с 09:00 до 21:00 по Москве.</p><a href="mailto:hello@fotozaka.ru"><Mail/>hello@fotozaka.ru</a><button>Открыть чат <ArrowRight/></button><small><ShieldCheck/>Поможем с заказом, оплатой или спором</small></aside>}
