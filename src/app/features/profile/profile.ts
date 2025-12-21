import { Component, inject, OnInit } from '@angular/core';
import { Api } from '../../core/api';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { AuthStateService } from '../../core/services/auth-state.service';
import { AuthStateSignalService } from '../../core/services/auth-state-signal.service';

@Component({
  selector: 'app-profile',
  imports: [AsyncPipe,JsonPipe],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
  standalone:true,
})
export class Profile implements OnInit {
    private api = inject(Api);
    authState=inject(AuthStateService)
    authSignalState=inject(AuthStateSignalService)
    profile:any;
    user:any={}
    emp:any={}
    ngOnInit(): void {
      this.api.getProfile().subscribe(data=>{
        this.profile=data;
      })
      this.authState.user$.subscribe(user => {
        this.user = user;
      });
      // this.authSignalState.employee.subscribe(emp=>{
      //   this.emp=emp;
      // })
    }
    
}
