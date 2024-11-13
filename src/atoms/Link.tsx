'use client';

import NextLink from 'next/link';

import { parseUrl } from '~/util/navigation';

import type { FC, ReactNode } from 'react';

interface LinkProps {
    /** Link text */
    children: ReactNode;
    /** Link href */
    href: string;
    /** CSS class name */
    className?: string;
    /** Enables underline */
    underline?: boolean;
    /** Enables icon */
    icon?: boolean;
    /** Optional onClick event */
    onClick?: (e: { preventDefault: () => void }) => void;
    /** Anchor link */
    anchorLink?: string | undefined | null;
    /** Aria label */
    ariaLabel?: string;
}

const Link: FC<LinkProps> = ({
    href: destination,
    anchorLink,
    children,
    // underline = true,
    icon = true,
    onClick,
    ariaLabel,
}) => {

    const { href = '', target = undefined, rel = undefined } = parseUrl(destination) || {};

    return (
        <NextLink
            className='mr-auto inline-block px-1 font-mono text-sm font-bold text-primary-500'
            href={anchorLink ? `${href}#${anchorLink}` : href}
            rel={rel}
            target={target}
            onClick={onClick}
            aria-label={ariaLabel}
        >
            <span className='mr-2.5 inline-block'>{children}</span>
            {icon && <span className='relative'>{'>'}</span>}
        </NextLink>
    );
};

export default Link;
