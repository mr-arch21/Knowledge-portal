import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Dashboard } from './features/dashboard/pages/dashboard/dashboard';
import { Header } from './features/dashboard/pages/header/header';
import { Footer } from './features/dashboard/pages/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Dashboard,Header,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('knowledge-portal');
  isRunning:boolean=true;
  toggle(){
    this.isRunning=!this.isRunning;
  }
}
