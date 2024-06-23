import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: 'de',
  fallbackLocale: 'en',
  messages: {
    de: {
      "Some page": "Eine Seite",
      "Other page": "Andere Seite"
    }
  }
})

export default i18n
