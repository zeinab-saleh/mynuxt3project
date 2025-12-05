export default {
  defaultLocale: 'en',
  locales: [
    { code: 'en', name: 'English', iso: 'en-US', file: 'en.json' },
    { code: 'ar', name: 'العربية', iso: 'ar-AR', file: 'ar.json', dir: 'rtl' }
  ],
  lazy: true,
  langDir: 'locales/',
  vueI18n: {
    legacy: false,
    fallbackLocale: 'en'
  }
}
