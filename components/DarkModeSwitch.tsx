import { useState } from 'react';
import { Switch } from '@headlessui/react';
import LightMode from './icons/LightMode';
import DarkMode from './icons/DarkMode';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function DarkModeSwitch({
    darkMode,
    toggleDarkMode,
}: {
    darkMode: boolean;
    toggleDarkMode: () => void;
}) {
    return (
        <Switch
            checked={darkMode}
            onChange={toggleDarkMode}
            className={classNames(
                darkMode ? 'bg-gray-600' : 'bg-gray-200',
                'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500',
            )}
        >
            <span className="sr-only">Toggle dark mode</span>
            <span
                className={classNames(
                    darkMode ? 'translate-x-5' : 'translate-x-0',
                    'pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
                )}
            >
                <span
                    className={classNames(
                        darkMode
                            ? 'opacity-0 ease-out duration-100'
                            : 'opacity-100 ease-in duration-200',
                        'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
                    )}
                    aria-hidden="true"
                >
                    <LightMode className="h-3 w-3 text-gray-400" />
                </span>
                <span
                    className={classNames(
                        darkMode
                            ? 'opacity-100 ease-in duration-200'
                            : 'opacity-0 ease-out duration-100',
                        'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
                    )}
                    aria-hidden="true"
                >
                    <DarkMode className="h-3 w-3 text-gray-400" />
                </span>
            </span>
        </Switch>
    );
}
