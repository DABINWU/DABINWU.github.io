async function copyToClipboard(selector) {
  const element = document.querySelector(selector);
  if (!element) return false;
  const text = element.textContent;
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch (_) {
    // Fall back for browsers that deny clipboard API access.
  }
  const temporary = document.createElement('textarea');
  temporary.value = text;
  temporary.style.position = 'fixed';
  temporary.style.opacity = '0';
  document.body.append(temporary);
  const previousFocus = document.activeElement;
  temporary.select();
  let copied = false;
  try { copied = document.execCommand('copy'); } catch (_) {}
  temporary.remove();
  if (previousFocus && typeof previousFocus.focus === 'function') previousFocus.focus();
  return copied;
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-copy]').forEach(button => {
    button.addEventListener('click', async () => {
      button.disabled = true;
      const copied = await copyToClipboard('#' + button.dataset.copy);
      const chinese = document.documentElement.lang === 'zh-CN';
      button.nextElementSibling.textContent = copied
        ? (chinese ? '已复制。' : 'Copied.')
        : (chinese ? '复制失败，请展开字符串并手动复制。' : 'Copy failed. Open the string and copy it manually.');
      button.disabled = false;
    });
  });
});
