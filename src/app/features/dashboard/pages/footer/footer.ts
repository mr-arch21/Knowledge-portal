import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ThemeStateService } from '../../../../core/services/theme-state.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone:true,

})
export class Footer {
  themeState=inject(ThemeStateService)
  logRender() {
    console.log('Footer rendered');
    return '';
  }
}
