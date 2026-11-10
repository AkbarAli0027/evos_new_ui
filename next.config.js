const path = require('path');

const BASE_URL = 'https://api.ectn.uz/api';
const BASE_URL_V2 = 'https://evsapi.ectn.uz';
const BASE_URL_STRAPI = 'http://admin.evos.uz/api';
const BASE_URL_STRAPI_HTTPS = 'https://admin.evos.uz/api';
const BASE_URL_STRAPI_IMAGE = 'https://admin.evos.uz';

/** Fallback URL for local development. Use only when no env var is set. */
const LOCAL_DEV_STRAPI = 'http://localhost:1337/api';

/** Normalize localhost URLs to loopback so connection handling is consistent. */
function normalizeBaseUrl(url) {
  try {
    const parsed = new URL(url);
    if (parsed.hostname === 'localhost') {
      parsed.hostname = '127.0.0.1';
    }
    return parsed.toString();
  } catch (err) {
    return url;
  }
}

/** Resolve env value with a safe local-dev fallback; never fail on missing config. */
function resolveUrl(name, fallback) {
  const raw = process.env[name];
  if (!raw || typeof raw !== 'string') return fallback;
  const trimmed = raw.trim();
  return trimmed ? trimmed : fallback;
}

// Keep the explicit URL config; do not replace the app's configured base.
const resolvedStrapi = resolveUrl('BASE_URL_STRAPI', BASE_URL_STRAPI);
const resolvedStrapiHttps = resolveUrl('BASE_URL_STRAPI_HTTPS', BASE_URL_STRAPI_HTTPS);
const resolvedStrapiImage = resolveUrl('BASE_URL_STRAPI_IMAGE', BASE_URL_STRAPI_IMAGE);

module.exports = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      '16a9564f-f8ec-42ba-a998-3027aa809e50.selstorage.ru',
      'cp.ectn.uz',
      'admin.evos.uz',
      'api.ectn.uz',
    ],
  },
  env: {
    MAP_API_KEY: '5167199c-d7a9-4557-b1bc-0447b2aaf88d',
    MAP_API_URL: 'https://geocode-maps.yandex.ru/1.x/',
    TOKEN:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJVc2VyIiwibmJmIjoxNjQ0OTE1MzkwLCJleHAiOjE3MjQxMTUzOTAsImlzcyI6Imh0dHBzOi8vYXBpLmV2b3MtcHJvZC51eiIsImF1ZCI6IkVWT1MifQ.VyilxSNBenbbYNpRm_hBCsHbzJXS4SEaZ4JjnggZJ5U',
    BASE_URL: normalizeBaseUrl(resolveUrl('BASE_URL', BASE_URL)),
    BASE_URL_V2: normalizeBaseUrl(resolveUrl('BASE_URL_V2', BASE_URL_V2)),
    BASE_URL_STRAPI: normalizeBaseUrl(resolvedStrapi),
    BASE_URL_STRAPI_HTTPS: normalizeBaseUrl(resolvedStrapiHttps),
    BASE_URL_STRAPI_IMAGE: normalizeBaseUrl(resolvedStrapiImage),
    LOCALOS_DEV_STRAPI: normalizeBaseUrl(LOCAL_DEV_STRAPI),
    HOME_PAGE_API_URL: normalizeBaseUrl(resolveUrl('HOME_PAGE_API_URL', resolvedStrapi + '/home-page')),
    MENU_API_URL: normalizeBaseUrl(resolveUrl('MENU_API_URL', BASE_URL + '/menu/bracnh/24')),
    CATEGORIES_API_URL: normalizeBaseUrl(resolveUrl('CATEGORIES_API_URL', BASE_URL + '/menu/top')),
    HOME_PAGE_API_URL_STRAPI: normalizeBaseUrl(
      resolveUrl('HOME_PAGE_API_URL_STRAPI', resolvedStrapi + '/home-page')
    ),
    CDN: 'https://cp.ectn.uz/files/',
    EMAIL: 'oripovdoniyor937@gmail.com',
    PASSWORD: 'doni2303+',
    EMAIL_TO: 'it@evos.uz',
    TOKEN_V2:
      'oX4Ad9xEX9CEOQs/HvU5btFlA7g7g7umO4RegLTaPX2lveg0vs2xfGpqE3ng33K7GN4AdsgjWTq8OvuWK8IGQxsOCTiWu2h+A/9lO3zRNMrzBMc4wSDPSyPqO17OunD6nAI11EvtlAtk5FsBmziP2oVV6DUMJuKXgM1xDAjndV7TnF46vdMo9OKyfPKOWwaxS6APgudjulUAmf5Fl1uY3oIpn/8GfYQn5HzBumn7RSaq646bD8aTbtY766YUy1psaexClQXNhezc0KFAO0zyxA0fcMgK5Ua2R3hcxjlNetaj+ZsdTqkBxTX4wu9gW2+05MKnc+r7RUj4CTVXWaC0E7C7OA3ot4ZxseVyBWI/AV8jw/sPZZoTS7rEEDDIOQUWWkkBnSGAqNmmDHVW8Fd0SQIugN6QZJjtnHwuYRS7aw==',
  },
  transpilePackages: ['mui-tel-input'],
  i18n: {
    locales: ['ru', 'uz', 'en'],
    defaultLocale: 'uz',
    localeDetection: false,
  },
  trailingSlash: false,
};
