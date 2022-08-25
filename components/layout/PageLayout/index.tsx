import React, { FC, ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import DarkModeSwitch from '../../DarkModeSwitch';

const PageLayout: FC<{
    children: ReactNode | ReactNode[];
    readerMode?: boolean;
}> = ({ children, readerMode = false }) => {
    const [theme, setTheme] = useState<string | Function>(() => {
        // if (
        //     window.sessionStorage.theme === 'dark' ||
        //     (!('theme' in window.sessionStorage) &&
        //         window.matchMedia('(prefers-color-scheme: dark)').matches)
        // ) {
        //     document.documentElement.classList.add('dark');
        //     return 'dark';
        // } else {
        //     document.documentElement.classList.remove('dark');
        //     return 'light';
        // }
    });

    const toggleDarkMode = () => {
        const root = document.documentElement;

        if (root.classList.contains('dark')) {
            setTheme('light');
            root.classList.remove('dark');
            window.sessionStorage.setItem('theme', 'light');
        } else {
            setTheme('dark');
            root.classList.add('dark');
            window.sessionStorage.setItem('theme', 'dark');
        }
    };

    return (
        <div className="flex flex-col justify-between">
            <header className="mb-8 mt-10">
                <nav className="flex items-center justify-between flex-wrap gap-x-6 max-w-screen-sm mx-auto px-4">
                    <Link href="/">
                        <a className="flex justify-between items-center w-full no-underline text-gray-800 dark:text-gray-100  mb-2">
                            <h1
                                className={`dark:hover:text-blue-500 hover:text-blue-600
                                    ${
                                        readerMode
                                            ? 'text-base uppercase'
                                            : 'text-5xl'
                                    }
                                `}
                            >
                                Dafydd Thomas
                            </h1>
                            {/* <DarkModeSwitch
                                darkMode={theme === 'dark'}
                                toggleDarkMode={toggleDarkMode}
                            /> */}
                        </a>
                    </Link>

                    {!readerMode && (
                        <div className="space-x-4 flex justify-center w-full mt-3">
                            <NavLink href="/blog">Blog</NavLink>
                            <NavLink href="/projects">Projects</NavLink>
                        </div>
                    )}

                    {readerMode && (
                        <div className="space-x-4">
                            <NavLink href="/blog">Return to blog</NavLink>
                        </div>
                    )}
                </nav>
            </header>
            <main className="flex-1 w-full max-w-screen-sm mx-auto px-4">
                {children}
            </main>
            <footer className="mt-8 text-center">
                <div className="max-w-screen-sm mx-auto p-4 border-t-2">
                    <p>Made with ❤️&nbsp; in 🏴󠁧󠁢󠁷󠁬󠁳󠁿&nbsp; by Dafydd Thomas</p>
                </div>
            </footer>
        </div>
    );
};

export default PageLayout;
