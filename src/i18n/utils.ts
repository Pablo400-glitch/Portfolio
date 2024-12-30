import { ui, defaultLang, showDefaultLang } from './ui';

// Definir tipos para las traducciones

interface Technology {
  icon: string;
}

interface WorkExperience {
  position_name: string;
  company_name: string;
  company_country: string;
  date_span: string;
  description: string;
}

interface Work {
  link: string;
  image: string;
  webpage_name: string;
  description: string;
}

interface Translations {
  full_name: string;
  career_name: string;
  introduction: string;
  technologies: {
    title: string;
    technologies_array: Technology[];
  };
  work_experience: {
    title: string;
    experience: WorkExperience[];
  };
  my_work: {
    title: string;
    work_array: Work[];
  };
}

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(): Translations {
    return ui[lang] || ui[defaultLang];  // Asegúrate de que esto devuelva un objeto con el tipo adecuado
  }
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    // Obtener el prefijo de base desde la configuración de Astro
    const basePath = import.meta.env.BASE_URL === '/' ? '' : '/Portfolio';
    
    // Verifica si la ruta no está usando el idioma por defecto
    const languagePath = !showDefaultLang && l === defaultLang ? path : `/${l}${path}`;
    
    // Devuelve la ruta con el prefijo adecuado
    return `${basePath}${languagePath}`;
  };
}