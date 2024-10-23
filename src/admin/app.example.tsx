import type { StrapiApp } from '@strapi/strapi/admin';

export default {
    config: {
        locales: [
            'pt-BR',
            'en'
        ],
    },
    bootstrap(app: StrapiApp) {
        console.log(app);
    },
};
