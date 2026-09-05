import { Camera, Home, Search } from 'lucide-react';
import { Logo } from './_components/site-shell';

export default function NotFound(){return <main className="not-found"><header><Logo/></header><section><span>404</span><Camera/><h1>Этот кадр не получился</h1><p>Страница могла переехать или ссылка устарела. Вернёмся к поиску хорошего фотографа.</p><div><a href="/"><Home/>На главную</a><a href="/search"><Search/>Найти фотографа</a></div></section></main>}
