import { Component, OnInit } from '@angular/core';
import { ManagerHeaderComponent, ManagerPageLayoutComponent } from 'tt-library-angular-porfolio';

@Component({
  selector: 'tt-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [
    ManagerPageLayoutComponent,
    ManagerHeaderComponent,
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
