import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

ImagePath: string;

constructor() {
 this.ImagePath = '/assets/picture1.jpg'
}
ngOnInit(){
 
}
}