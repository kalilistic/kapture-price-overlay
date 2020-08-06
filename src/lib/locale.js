import store from "../store";
import { getLanguageId } from "./overlay";
import moment from "moment";

export function setLocale(context) {
  let languages = store.getters.languages;
  let language = languages[store.state.settings.languageId];
  if (language.id === 0) {
    getLanguageId().then(languageId => {
      let pluginLanguage = languages[languageId];
      context.$root.$i18n.locale = pluginLanguage.locale;
      moment.locale(context.$root.$i18n.locale);
    });
  } else {
    context.$root.$i18n.locale = language.locale;
    moment.locale(context.$root.$i18n.locale);
  }
}
