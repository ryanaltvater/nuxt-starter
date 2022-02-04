import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    'tailwindcss/nesting': {},
                    tailwindcss: {},
                    autoprefixer: {},
                }
            },
        },
    },
    css: [
        '~/assets/scss/styles.scss',
    ],
    meta: {
        script: [
            { src: 'https://code.jquery.com/jquery-3.6.0.min.js' },
            { src: '/assets/js/scripts.js' },
        ],
        title: 'Global Page Title',
    },
    srcDir: 'src',
    ssr: false,
})