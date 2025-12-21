import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeStateService {
  theme = signal<boolean>(true);

  setTheme() {
    
    this.theme.set(!this.theme);
    console.log(this.theme())
  }

}
