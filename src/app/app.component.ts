import { Component } from '@angular/core';

@Component({
  selector: '.app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angularBackend';
  appdata:Array<any>=[
    {
      id:1,
      item:'rice',
      checked:true
    },
    {
      id:2,
      item:'beans',
      checked:true
    },
    {
      id:3,
      item:'sugar',
      checked:true
    },
  ]
  constructor(){}

}
