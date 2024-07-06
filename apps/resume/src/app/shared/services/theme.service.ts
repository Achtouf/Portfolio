import { effect, Injectable, signal } from '@angular/core';

export enum AppTheme {
  dark = 'dark',
  light = 'light',
}

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private _KEY = 'AA_THEME';

  theme = signal<AppTheme>(AppTheme.light);

  constructor() {
    this.loadTheme();
    effect(() => {
      this.saveTheme(this.theme());
    });
  }

  loadTheme(): void {
    this.theme.set(
      (localStorage.getItem(this._KEY) ?? AppTheme.light) as AppTheme
    );
  }

  saveTheme(theme: AppTheme): void {
    localStorage.setItem(this._KEY, theme);
  }

  toggle(): void {
    const isDark = this.theme() === AppTheme.dark;
    console.log('[toggle] isDark: ', isDark);
    this.theme.set(isDark ? AppTheme.light : AppTheme.dark);
  }
}
