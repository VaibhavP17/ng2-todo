import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myTitle: string;

  constructor (){
    this.myTitle = 'Hey Jude';
  }
}
