import pkg from './package.json';

export default defineNuxtConfig({
    app: {
        head: {
            title: 'W!SH ~ Project',
        },
    },
    css: [
        '@/assets/style/global.scss',
    ],
    devtools: {
        enabled: true,
    },
    modules: [
        'nuxt-icons',
    ],
});
