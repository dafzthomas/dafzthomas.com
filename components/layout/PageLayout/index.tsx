import React, { FC } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';

const PageLayout: FC = ({ children }) => {
    return (
        <div className="flex flex-col justify-between">
            <header className="mb-8 border-t-8 border-purple-700 pt-3 ">
                <div className="max-w-screen-sm mx-auto px-4 text-center">
                    <nav className="block">
                        <Link href="/">
                            <a className="no-underline text-gray-700 hover:text-blue-600 block mb-2">
                                <h1>Dafydd Thomas</h1>
                            </a>
                        </Link>

                        <div className="space-x-4 mb-2">
                            {/* <NavLink href="/about">About</NavLink> */}
                            <NavLink href="/blog">Blog</NavLink>
                        </div>
                    </nav>
                </div>
            </header>
            <main className="flex-1 w-full max-w-screen-sm mx-auto px-4">
                {children}
            </main>
            <footer className="mt-8">
                <div className="max-w-screen-sm mx-auto p-4 border-t-2">
                    <p>Made with ❤️&nbsp; in 🏴󠁧󠁢󠁷󠁬󠁳󠁿&nbsp; by Dafydd Thomas</p>
                </div>
            </footer>
        </div>
    );
};

export default PageLayout;
