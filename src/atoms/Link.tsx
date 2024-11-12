'use client';

import NextLink from 'next/link';
import { FC, ReactNode } from 'react';

import styles from './Link.module.scss';

import { parseUrl } from '~/util/navigation';

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
    className,
    underline = true,
    icon = true,
    onClick,
    ariaLabel,
}) => {
    const classList = '';

    const { href = '', target = undefined, rel = undefined } = parseUrl(destination) || {};

    return (
        <NextLink
            className={classList}
            href={anchorLink ? `${href}#${anchorLink}` : href}
            rel={rel}
            target={target}
            onClick={onClick}
            aria-label={ariaLabel}
        >
            <span className={styles['link-text']}>{children}</span>
            {icon && <span className={styles['link-icon']}>{'>'}</span>}
        </NextLink>
    );
};

export default Link;
