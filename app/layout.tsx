import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://fotozaka.ru'),
  title: 'ФотоЗака — найдите своего фотографа',
  description: 'Выберите город, стиль, локацию и свободное время. Проверенные фотографы и понятная цена за съёмку.',
  openGraph: {
    title: 'ФотоЗака — ваш фотограф, ваше время',
    description: 'Свободные даты, готовые локации и проверенные фотографы рядом.',
    images: [{ url: '/og.png', width: 1734, height: 907, alt: 'ФотоЗака — ваш фотограф, ваше время' }],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ФотоЗака — ваш фотограф, ваше время',
    description: 'Свободные даты, готовые локации и проверенные фотографы рядом.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
