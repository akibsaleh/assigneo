/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { PiMoonBold, PiSunBold } from 'react-icons/pi';

const ThemeToggle = () => {
  const HSThemeAppearance = {
    init() {
      const defaultTheme = 'default';
      let theme = localStorage.getItem('hs_theme') || defaultTheme;

      if (document.querySelector('html').classList.contains('dark')) return;
      this.setAppearance(theme);
    },
    _resetStylesOnLoad() {
      const $resetStyles = document.createElement('style');
      $resetStyles.innerText = `*{transition: unset !important;}`;
      $resetStyles.setAttribute('data-hs-appearance-onload-styles', '');
      document.head.appendChild($resetStyles);
      return $resetStyles;
    },
    setAppearance(theme, saveInStore = true, dispatchEvent = true) {
      const $resetStylesEl = this._resetStylesOnLoad();

      if (saveInStore) {
        localStorage.setItem('hs_theme', theme);
      }

      if (theme === 'auto') {
        theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'default';
      }

      document.querySelector('html').classList.remove('dark');
      document.querySelector('html').classList.remove('default');
      document.querySelector('html').classList.remove('auto');

      document.querySelector('html').classList.add(this.getOriginalAppearance());

      setTimeout(() => {
        $resetStylesEl.remove();
      });

      if (dispatchEvent) {
        window.dispatchEvent(new CustomEvent('on-hs-appearance-change', { detail: theme }));
      }
    },
    getAppearance() {
      let theme = this.getOriginalAppearance();
      if (theme === 'auto') {
        theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'default';
      }
      return theme;
    },
    getOriginalAppearance() {
      const defaultTheme = 'default';
      return localStorage.getItem('hs_theme') || defaultTheme;
    },
  };
  HSThemeAppearance.init();

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (HSThemeAppearance.getOriginalAppearance() === 'auto') {
      HSThemeAppearance.setAppearance('auto', false);
    }
  });

  window.addEventListener('load', () => {
    const $clickableThemes = document.querySelectorAll('[data-hs-theme-click-value]');
    const $switchableThemes = document.querySelectorAll('[data-hs-theme-switch]');

    $clickableThemes.forEach(($item) => {
      $item.addEventListener('click', () => HSThemeAppearance.setAppearance($item.getAttribute('data-hs-theme-click-value'), true, $item));
    });

    $switchableThemes.forEach(($item) => {
      $item.addEventListener('change', (e) => {
        HSThemeAppearance.setAppearance(e.target.checked ? 'dark' : 'default');
      });

      $item.checked = HSThemeAppearance.getAppearance() === 'dark';
    });

    window.addEventListener('on-hs-appearance-change', (e) => {
      $switchableThemes.forEach(($item) => {
        $item.checked = e.detail === 'dark';
      });
    });
  });

  return (
    <>
      <button
        type="button"
        className="hs-dark-mode-active:hidden hs-dark-mode group flex items-center transition-colors duration-200 text-rich font-medium hover:text-mandarin"
        data-hs-theme-click-value="dark"
      >
        <PiMoonBold className="text-4xl sm:text-3xl border border-platinum shadow hover:shadow-none rounded-full p-1" />
      </button>
      <button
        type="button"
        className="hs-dark-mode-active:flex hidden hs-dark-mode group items-center font-medium transition-colors duration-200 dark:text-platinum dark:hover:text-mandarin"
        data-hs-theme-click-value="light"
      >
        <PiSunBold className="text-4xl sm:text-3xl  border border-slate-700 shadow shadow-slate-700 hover:shadow-none rounded-full p-1" />
      </button>
    </>
  );
};

export default ThemeToggle;
