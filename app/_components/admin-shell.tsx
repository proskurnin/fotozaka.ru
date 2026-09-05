import type { ReactNode } from 'react';
import { BadgeCheck, Banknote, BookOpenText, BriefcaseBusiness, Flag, LayoutDashboard, MapPin, Megaphone, MessageSquareWarning, Settings, ShieldCheck, Star, UserRoundCheck, Users } from 'lucide-react';
import { PortalShell, type PortalNavItem } from './portal-shell';

export const adminNav: PortalNavItem[]=[
 {href:'/admin',label:'Обзор',icon:<LayoutDashboard/>},
 {href:'/admin/moderation',label:'Модерация',icon:<BadgeCheck/>,badge:'12'},
 {href:'/admin/photographers',label:'Фотографы',icon:<UserRoundCheck/>},
 {href:'/admin/users',label:'Клиенты',icon:<Users/>},
 {href:'/admin/orders',label:'Заказы',icon:<BriefcaseBusiness/>},
 {href:'/admin/disputes',label:'Споры и жалобы',icon:<MessageSquareWarning/>,badge:'3'},
 {href:'/admin/reviews',label:'Отзывы',icon:<Star/>},
 {href:'/admin/locations',label:'Локации',icon:<MapPin/>},
 {href:'/admin/collections',label:'Контент',icon:<BookOpenText/>},
 {href:'/admin/finance',label:'Финансы',icon:<Banknote/>},
 {href:'/admin/promotions',label:'Продвижение',icon:<Megaphone/>},
 {href:'/admin/reports',label:'Отчёты',icon:<Flag/>},
 {href:'/admin/settings',label:'Система',icon:<Settings/>},
];

export function AdminShell({title,current,children,action}:{title:string;current:string;children:ReactNode;action?:{href:string;label:string}}){return <PortalShell admin role="Администрирование" name="Роман Проскурнин" initials="RP" subtitle="Владелец проекта" title={title} current={current} nav={adminNav} action={action}>{children}</PortalShell>}

export function RiskBadge({children,tone='neutral'}:{children:ReactNode;tone?:string}){return <i className={`risk-badge ${tone}`}><ShieldCheck/>{children}</i>}
