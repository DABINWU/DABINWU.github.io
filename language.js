(() => {
  const storageKey = 'dabinwu-language';
  let language = 'en';
  try { language = localStorage.getItem(storageKey) === 'zh' ? 'zh' : 'en'; } catch (_) {}
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';

  function applyLanguage(next) {
    language = next === 'zh' ? 'zh' : 'en';
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    const title = document.querySelector('title');
    if (title) title.textContent = title.dataset[language === 'zh' ? 'titleZh' : 'titleEn'];
    document.querySelectorAll('[data-set-language]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.setLanguage === language));
    });
    document.querySelectorAll('[data-alt-en]').forEach(element => {
      element.alt = element.dataset[language === 'zh' ? 'altZh' : 'altEn'];
    });
    document.querySelectorAll('[data-label-en]').forEach(element => {
      element.setAttribute('aria-label', element.dataset[language === 'zh' ? 'labelZh' : 'labelEn']);
    });
    document.querySelectorAll('.copy-status').forEach(element => { element.textContent = ''; });
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(language);
    document.querySelectorAll('[data-set-language]').forEach(button => {
      button.addEventListener('click', () => {
        applyLanguage(button.dataset.setLanguage);
        try { localStorage.setItem(storageKey, language); } catch (_) {}
      });
    });
  });
  window.addEventListener('pageshow', () => {
    try { applyLanguage(localStorage.getItem(storageKey) === 'zh' ? 'zh' : 'en'); } catch (_) {}
  });
})();
