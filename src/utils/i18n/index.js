import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as enTranslation from '../translations/en.json';
import * as idTranslation from '../translations/id.json';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: enTranslation
  },
  id: {
    translation: idTranslation
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "id",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
      format: function (value, rawFormat, lng) {
        const [format, ...additionalValues] = rawFormat.split(',').map((v) => v.trim());
        switch (format) {
          case 'uppercase':
            return value.toUpperCase();
          case 'price':
            return Intl.NumberFormat(lng, {
              style: 'currency',
              currency: additionalValues[0]
            }).format(value);
        }
      }
    }
  });

  export default i18n;