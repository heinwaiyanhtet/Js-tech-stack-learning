import 'server-only';

const dictionaries: Record<string, () => Promise<Record<string, any>>> = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  nl: () => import('@/dictionaries/nl.json').then((module) => module.default),
};

// Define the function separately and then export it as default
async function getDictionary(locale: string): Promise<Record<string, any>> {
  if (!dictionaries[locale]) {
    throw new Error(`Dictionary for locale '${locale}' not found`);
  }

  console.log(dictionaries[locale]);

  return dictionaries[locale]();
}

export default getDictionary;
