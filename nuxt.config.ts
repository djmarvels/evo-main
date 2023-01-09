// @ts-ignore
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=max-content, initial-scale=1',
            title: 'EVO',
            link: [
                { rel: "stylesheet", href: "https://unpkg.com/flowbite@1.4.5/dist/flowbite.min.css" },
            ],
            script: [
                { src: 'https://unpkg.com/flowbite@1.4.5/dist/flowbite.js' }
            ]
        }
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/i18n',
        '@pinia/nuxt',
    ],
    i18n: {
        strategy: 'no_prefix',
        locales: [
            { code: 'en', iso: 'en-US', file: 'en.json', dir: 'ltr', name: '🇬🇧 English', flag: '🇬🇧' },
            { code: 'uk', iso: 'uk-UA', file: 'uk.json', dir: 'ltr', name: '🇺🇦 Ukraine', flag: '🇺🇦' },
        ],
        langDir: 'locales',
        defaultLocale: 'en',
        detectBrowserLanguage: {
            useCookie: true,
        }
    },
    components: {
        global: true,
        dirs: [
          '@/components'
        ]
    },
    css: [
        '@/assets/styles/main.scss'
    ],
});