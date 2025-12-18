import { Component, inject, OnInit } from '@angular/core';
import { Api } from '../../core/api';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [AsyncPipe,JsonPipe],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
  standalone:true,
})
export class Profile implements OnInit {
    private api = inject(Api);
    profile:any;
    ngOnInit(): void {
      this.api.getProfile().subscribe(data=>{
        this.profile=data;
      })
    }
}
