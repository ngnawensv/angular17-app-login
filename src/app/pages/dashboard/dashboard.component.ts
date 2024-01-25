import { Component, OnInit } from '@angular/core';
import { DashbordService } from '../services/dashbord.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{

  users: any[] = [];

  constructor(private dashbordService: DashbordService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    debugger;
    this.dashbordService.getAllUsers().subscribe((res: any) => {
      this.users = res.data;
    },
      error => {
      alert("Error from API")
    })
  }
}
