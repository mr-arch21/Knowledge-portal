import { Component, inject } from '@angular/core';
import { ThemeStateService } from '../../../../core/services/theme-state.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',  
  standalone:true,
})
export class Header {
     themeState= inject(ThemeStateService);
      
     toggleTheme(){
       this.themeState.theme.set(!this.themeState.theme());
     }
}
