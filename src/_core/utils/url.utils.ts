export const trimSlash = (url: string): string =>
  url ? decodeURIComponent(url)?.replace(/(^\/|\/$)/g, '') : url
