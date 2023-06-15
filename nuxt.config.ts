// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            titleTemplate: '%s - Site title',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'author', content: 'Site author' },
                { name: 'copyright', content: 'Site copyright' },
                { property: 'og:locale', content: 'en_US' }
            ],
            link: [
                // { rel: 'stylesheet', href: '', crossorigin: '' }
            ],
            script: [
                { src: 'https://code.jquery.com/jquery-3.6.0.min.js', tagPosition: 'head' },
                // { src: '/assets/js/scripts.js', tagPosition: 'bodyClose' }
            ],
            bodyAttrs: { class: '' }
        }
    },
    css: [ '@/assets/scss/styles.scss' ],
    postcss: {
        plugins: {
            autoprefixer: {},
            tailwindcss: {},
            'tailwindcss/nesting': {}
        }
    },
    srcDir: 'src/',
    ssr: false
});
