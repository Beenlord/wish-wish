import pkg from './package.json';

export default defineNuxtConfig({
    app: {
        head: {
            title: pkg.name,
        },
    },
    devtools: {
        enabled: true,
    },
    modules: [
        'nuxt-icons',
    ],
});
