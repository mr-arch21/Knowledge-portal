import { Injectable, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeStateService {

  // signal holds current theme
  theme = signal<Theme>('light');

  toggleTheme() {
    this.theme.update(current =>
      current === 'light' ? 'dark' : 'light'
    );
  }

  setTheme(theme: Theme) {
    this.theme.set(theme);
  }
}
