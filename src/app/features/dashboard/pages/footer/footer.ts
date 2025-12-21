import { Component, inject } from '@angular/core';
import { ThemeStateService } from '../../../../core/services/theme-state.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  standalone:true,

})
export class Footer {
     themeState=inject(ThemeStateService)
}
