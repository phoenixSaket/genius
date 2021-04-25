import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'genius';
  showMenu: boolean = false;


  hamClicked() {
    this.showMenu = !this.showMenu;
  }
}
