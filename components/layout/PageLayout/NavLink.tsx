import Link, { LinkProps } from 'next/link';
import React, { FC } from 'react';
import useActiveLink from '../../../hooks/useActiveLink';

const NavLink: FC<LinkProps> = ({ children, ...props }) => {
    const activeLink = useActiveLink(props.href as string);

    return (
        <Link {...props} passHref>
            <a>
                <span
                    className={`
                        ${
                            activeLink
                                ? 'underline underline-offset-4 decoration-blue-600 dark:decoration-blue-500'
                                : ''
                        }
                    `}
                >
                    {children}
                </span>
            </a>
        </Link>
    );
};

export default NavLink;
