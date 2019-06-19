/**
 * Extract the pathname from a url in string
 *
 * @param {string} url
 * @returns {string} A string with pathname of the link.
 */
export default function getPathName(url ) {

    const a = new URL(url)

    return a.pathname;
}
