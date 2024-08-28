'use client';

import React, { Suspense, useState, useEffect } from 'react';
import Link from 'next/link';
import clx from 'classnames';
import { alcatra } from '@/app/fonts';
import { Paths } from '@/app/paths';

const HeroBannerVideo = React.lazy(() =>
    import('./HeroBannerVideo').then((module) => ({
        default: module.HeroBannerVideo,
    }))
);

export const HeroBanner = () => {
    const [text, setText] = useState('');
    const [loopNum, setLoopNum] = useState(0);

    const textArray = [
        'IT',
        'startupów',
        'biznesu',
        'UX/UI',
        'marketingu',
        'rozwoju zawodowego',
        'strategii biznesowej',
        'zarządzania projektami',
        'inspiracji i motywacji',
        'innowacji technologicznych',
    ];

    useEffect(() => {
        const handleTextChange = () => {
            setText(textArray[loopNum % textArray.length]);
            setLoopNum((prevLoopNum) => prevLoopNum + 1);
        };

        const interval = setInterval(handleTextChange, 1000); // Zmieniaj tekst co 1.5 sekundy

        return () => clearInterval(interval);
    }, [loopNum, textArray]);

    return (
        <section className="relative m-auto px-5 lg:max-w-[1440px]">
            <div className="m-auto max-w-3xl px-5 py-24">
                <h3 className="hidden">Skillgu home page</h3>
                <div className="flex flex-col justify-center items-center mb-8 w-full text-center text-32px font-bold leading-[48px] tracking-[-1px] text-primary lg:text-48px lg:leading-72px lg:tracking-[-2px]">
          <span className="font-semibold tracking-wide text-primary">
           Twój mentor od:
          </span>
                    <span
                        className={clx(
                            alcatra.className,
                            'font-semibold tracking-wide text-orange-500 mt-4',
                            'transition-opacity duration-500 ease-in-out opacity-0', // Domyślna przezroczystość
                        )}
                        style={{ opacity: text ? 1 : 0 }} // Użyj dynamicznej zmiany przezroczystości
                    >
            {text}
          </span>
                </div>
                <Link
                    href={Paths.MENTORS}
                    className="link-primary m-auto mb-12 block w-[180px] py-[14px] text-14px font-[600]"
                >
                    Znajdź mentora
                </Link>
                <Suspense fallback={<div className="h-[407px] rounded-3xl border" />}>
                    <HeroBannerVideo />
                </Suspense>
            </div>
        </section>
    );
};
