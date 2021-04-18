import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-box',
  templateUrl: './quote-box.component.html',
  styleUrls: ['./quote-box.component.css']
})
export class QuoteBoxComponent implements OnInit {

  public quote: string =  "Technology is really at it's best when it brings people together.";
  public array: string[] = [];
  
  constructor() { }
  
  ngOnInit(): void {

    let temp = this.quote.split(" ");
    temp.forEach(element => {
      this.array.push(element);
    });
  }
  
  
}

