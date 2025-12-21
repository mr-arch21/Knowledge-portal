import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './features/dashboard/pages/header/header';
import { Footer } from './features/dashboard/pages/footer/footer';
import { AuthStateService } from './core/services/auth-state.service';
import { AuthStateSignalService } from './core/services/auth-state-signal.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('knowledge-portal');
  constructor(private authState:AuthStateService, private authSignalState:AuthStateSignalService) {
    this.authState.setUser({
      id: 1,
      name: 'Aryan'
    })
    this.authSignalState.setEmp({
      id:"E01",
      name:"Rahul"

    })
  }
  isRunning:boolean=true;
  toggle(){
    this.isRunning=!this.isRunning;
  }
 
}
