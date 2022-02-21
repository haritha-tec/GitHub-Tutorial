import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-basics';
  firstItem={
    id:1,
    name:"Haritha",
    medium:"series",
    year:2022,
    watchedOn:12345678,
    isFav:false
  }
  OnItemDelete(data:string){
    
  }
}
