import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Todo List';
  name:string = 'pikabytes';

  constructor(){
    console.log("hola " + name);
    this.changeName('Alexis');
  }

  changeName(name:string):void{
    this.name = name;
  }

}
