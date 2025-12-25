import { Component } from '@angular/core';
import { ListComponent } from '../../components/list/list';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [ListComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  standalone:true,
})
export class Dashboard {
  dashboardData: any;

    constructor(private route: ActivatedRoute) {
       this.dashboardData = this.route.snapshot.data['dashboard'];
    }
   title="Dashboard Page";

}
