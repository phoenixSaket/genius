import { Component, OnInit } from '@angular/core';
import { secondHand } from "./second-hand";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images: string[] = [];
  secondHandData:any[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.images.push("https://raw.githubusercontent.com/phoenixSaket/genius/main/src/assets/Images/Sales.png");
    this.images.push("https://raw.githubusercontent.com/phoenixSaket/genius/main/src/assets/Images/Services.png");
    this.images.push("https://raw.githubusercontent.com/phoenixSaket/genius/main/src/assets/Images/CCTV.png");
    this.images.push("https://raw.githubusercontent.com/phoenixSaket/genius/main/src/assets/Images/AMC.png");

    secondHand.data.forEach(element => {
      this.secondHandData.push(element);
    });
  }

  carousel() {
    let myIndex = 0;
    let i;
    let x = Array.from(document.getElementsByClassName('mySlides') as HTMLCollectionOf<HTMLElement>);
    
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }

    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(this.carousel, 250);
  }
}
