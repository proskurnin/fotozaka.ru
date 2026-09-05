import type { ReactNode } from 'react';
import { ArrowRight, Bell, LogOut, Search, Settings } from 'lucide-react';
import { Logo } from './site-shell';

export type PortalNavItem = { href: string; label: string; icon: ReactNode; badge?: string };

export function PortalShell({ role, name, initials, subtitle, title, current, nav, children, action, admin = false }: {
  role: string; name: string; initials: string; subtitle: string; title: string; current: string;
  nav: PortalNavItem[]; children: ReactNode; action?: { href: string; label: string }; admin?: boolean;
}) {
  return <main className={`portal-page ${admin ? 'admin-portal' : ''}`}>
    <aside className="portal-sidebar"><Logo/><div className="portal-role">{role}</div><nav>{nav.map((item)=><a className={current===item.href?'active':''} href={item.href} key={item.href}>{item.icon}<span>{item.label}</span>{item.badge&&<i>{item.badge}</i>}</a>)}</nav><div className="portal-bottom"><a href={admin?'/admin/settings':`${current.startsWith('/dashboard/photographer')?'/dashboard/photographer':'/dashboard/client'}/settings`}><Settings/>Настройки</a><a href="/login"><LogOut/>Выйти</a><div className="portal-user"><span>{initials}</span><div><b>{name}</b><small>{subtitle}</small></div></div></div></aside>
    <section className="portal-main"><header className="portal-top"><div><span>{role}</span><h1>{title}</h1></div><div className="portal-top-actions"><button aria-label="Поиск"><Search/></button><button aria-label="Уведомления"><Bell/><i/></button>{action&&<a href={action.href}>{action.label}<ArrowRight/></a>}</div></header>{children}</section>
  </main>;
}

export function MetricCards({ items }: { items: { label: string; value: string; note: string; tone?: string }[] }) {
  return <section className="portal-metrics">{items.map((item)=><article className={item.tone||''} key={item.label}><span>{item.label}</span><strong>{item.value}</strong><small>{item.note}</small></article>)}</section>;
}

export function DataTable({ columns, rows }: { columns: string[]; rows: (string|ReactNode)[][] }) {
  return <div className="portal-table"><div className="portal-tr portal-th">{columns.map((c)=><span key={c}>{c}</span>)}</div>{rows.map((row,i)=><div className="portal-tr" key={i}>{row.map((cell,j)=><span key={j}>{cell}</span>)}</div>)}</div>;
}

export function EmptyState({ icon, title, text, href, action }: { icon: ReactNode; title: string; text: string; href?: string; action?: string }) {
  return <div className="portal-empty"><span>{icon}</span><h2>{title}</h2><p>{text}</p>{href&&action&&<a href={href}>{action}<ArrowRight/></a>}</div>;
}
