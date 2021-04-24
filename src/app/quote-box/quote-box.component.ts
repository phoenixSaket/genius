import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-box',
  templateUrl: './quote-box.component.html',
  styleUrls: ['./quote-box.component.css']
})
export class QuoteBoxComponent implements OnInit {

  typewriter_text = "It's not the faith in technology. It's the faith in people.";
  typewriter_display: string = "";

  constructor() { }

  ngOnInit(): void {
    this.typingCallback(this);
  }

  typingCallback(that: any) {
    
    let total_length = that.typewriter_text.length;
    let current_length = that.typewriter_display.length;
    if (current_length < total_length) {
      that.typewriter_display += that.typewriter_text[current_length];
      setTimeout(that.typingCallback, 100, that);
    } 
  }

}

