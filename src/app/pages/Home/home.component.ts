import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private readonly router: Router) { }
  foodData:any;
  ngOnInit(): void {
    
  }
Login(): void {
this.router.navigate(['admin']);
}
}
