import { ui, defaultLang } from './ui';

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

interface VideogamesMaster {
  title: string;
  subtitle: string;
  subject: string;
  description: string;
  video_link?: string;
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
  videogames_master: {
    title: string;
    description: string;
    entries: VideogamesMaster[];
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