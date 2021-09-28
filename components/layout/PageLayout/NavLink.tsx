import Link, { LinkProps } from 'next/link';
import React, { FC } from 'react';
import useActiveLink from '../../../hooks/useActiveLink';

const NavLink: FC<LinkProps> = ({ children, ...props }) => {
    const activeLink = useActiveLink(props.href as string);

    return (
        <Link {...props} passHref>
            <a>
                <span
                    className={`pb-1
                    ${activeLink ? 'border-b-2 border-purple-500' : ''}
                `}
                >
                    {children}
                </span>
            </a>
        </Link>
    );
};

export default NavLink;
