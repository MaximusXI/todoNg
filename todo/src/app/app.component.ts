import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';

  constructor(private router:Router){}

  gotoTodoUser(){
      this.router.navigate(['user',1]);
  }
  
  gotoTodoAdmin(){
    this.router.navigate(['admin',-1]);
  }
}


