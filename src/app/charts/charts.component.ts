import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  counter = 0;
  constructor(private router: Router, private activedRoute: ActivatedRoute) {

    this.activedRoute.paramMap.subscribe(p => {
      this.counter = +p.get('type');
    });


  }

  ngOnInit(): void {
  }

  plusOne() {
    this.counter = this.counter + 1;
    this.router.navigateByUrl('charts/' + this.counter);
  }

}
