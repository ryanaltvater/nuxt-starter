// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            // title: 'Global title',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'Global description' },
                { name: 'keywords', content: 'Global keywords' },
                { name: 'author', content: 'Global author' },
                { name: 'copyright', content: 'Global copyright' },
                { property: 'og:locale', content: 'en_US' },
                { property: 'og:type', content: 'Global type' },
                { property: 'og:title', content: 'Global title' },
                { property: 'og:description', content: 'Global description' },
                { property: 'og:image', content: 'Global image' },
                { property: 'og:url', content: 'Global url' },
            ],
            link: [
                // { rel: 'stylesheet', href: '', crossorigin: '' },
            ],
            script: [
                { src: 'https://code.jquery.com/jquery-3.6.0.min.js', tagPosition: 'head' },
                // { src: '/assets/js/scripts.js', tagPosition: 'bodyClose' },
            ],
            bodyAttrs: { class: '' },
        },
    },
    css: [ '@/assets/scss/styles.scss' ],
    postcss: {
        plugins: {
            autoprefixer: {},
            tailwindcss: {},
            'tailwindcss/nesting': {},
        },
    },
    srcDir: 'src/',
    ssr: false,
});
