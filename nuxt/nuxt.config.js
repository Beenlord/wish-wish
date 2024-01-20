import pkg from './package.json';

export default defineNuxtConfig({
    app: {
        head: {
            title: 'W!SH ~ Project',
        },
    },
    devtools: {
        enabled: true,
    },
    modules: [
        'nuxt-icons',
    ],
});
