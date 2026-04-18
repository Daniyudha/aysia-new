export default defineNuxtPlugin(() => {
  const { initLanguage } = useI18n();

  // Initialize language when the app starts on client side
  if (process.client) {
    initLanguage();
  }
});
