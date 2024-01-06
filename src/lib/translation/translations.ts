import type {Config} from 'sveltekit-i18n';
import i18n from 'sveltekit-i18n';
const config: Config = {
    loaders: [
        {
            locale: 'en',
            key: 'home',
            loader: async () => ({
                    ...await import('./en/homeEn.json'),
                    ...await import('./en/home/aboutgdsc.json'),
                    ...await import('./en/home/chapters.json'),
                    ...await import('./en/home/agenda.json'),
                    ...await import('./en/home/faq.json'),
                    ...await import('./en/home/hero.json'),
                    ...await import('./en/home/sponsors.json'),
                    ...await import('./en/home/criteria.json'),
                    ...await import('./en/home/howtojoin.json'),
                    ...await import('./en/home/countdown.json'),
                    ...await import('./en/home/info.json'),
                    ...await import('./en/home/nav.json'),
                    ...await import('./en/home/venue.json'),
                    ...await import('./en/home/sdg.json'),
                    ...await import('./en/home/timeline.json'),
            }),
        },
        {
            locale: 'th',
            key: 'home',
            loader: async () => {
                return ({
                    ...await import('./th/homeTh.json'),
                    ...await import('./th/home/aboutgdsc.json'),
                    ...await import('./th/home/chapters.json'),
                    ...await import('./th/home/agenda.json'),
                    ...await import('./th/home/faq.json'),
                    ...await import('./th/home/hero.json'),
                    ...await import('./th/home/sponsors.json'),
                    ...await import('./th/home/criteria.json'),
                    ...await import('./th/home/howtojoin.json'),
                    ...await import('./th/home/countdown.json'),
                    ...await import('./th/home/info.json'),
                    ...await import('./th/home/nav.json'),
                    ...await import('./th/home/venue.json'),
                    ...await import('./th/home/sdg.json'),
                    ...await import('./th/home/timeline.json'),
                })
            },
        }
    ],
}

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);