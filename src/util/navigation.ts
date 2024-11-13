/**
 * Returns modified version of slug.
 * If slug is `home`, returns empty string.
 * Otherwise, returns original slug.
 *
 * @param slug - Input slug
 * @returns Modified slug
 */
export const getPageSlug = (slug: string) => (slug === 'home' ? '' : slug);

export interface ParsedUrl {
  /** Indicates if the URL is internal */
  isInternal: boolean;
  /** Link's `rel` attribute */
  rel: string;
  /** Link's `target` attribute */
  target: string;
  /** Link's `href` attribute */
  href: string;
}

/**
 * Parses URL and returns object with information.
 *
 * @param href - URL to parse.
 * @returns Object with information about URL, or undefined if URL is invalid.
 */
export const parseUrl = (href: string): ParsedUrl | undefined => {
  if (!href) {
    return undefined;
  }

  try {
    const url = new URL(href);

    const isInternal =
      url.hostname === `www.${process.env.NEXT_PUBLIC_DOMAIN}` || url.hostname === process.env.NEXT_PUBLIC_DOMAIN;

    return {
      isInternal,
      rel: isInternal ? '' : 'noreferrer noopener',
      target: isInternal ? '' : '_blank',
      href: isInternal ? url.href.split(url.host)[1] : href,
    };
  } catch (error) {
    console.error('Invalid URL:', href, `[[${error}]]`);

    return undefined;
  }
};
