import data_en from '../locales/en.json'
import data_es from '../locales/es.json'


export const languages = {
    en: 'English',
    es: 'Español',
};
  
  export const defaultLang = 'en';
  export const showDefaultLang = true;
  
  export const ui = {
    en: data_en,
    es: data_es,
  } as const;