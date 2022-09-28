import { Component, OnInit } from '@angular/core';
import { hero } from '../hero';

@Component({
  selector: 'app-for-each',
  templateUrl: './for-each.component.html',
  styleUrls: ['./for-each.component.css']
})
export class ForEachComponent implements OnInit {
  heroes = ['Akshay','Amitabh','Rajnikanth','Dhanush'];
  data = [new hero(123,'rishav')];
  Product =['camera','phone','laptop'];
  constructor() { }

  ngOnInit(): void {
  }

}
