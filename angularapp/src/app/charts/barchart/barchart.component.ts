import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {
  // The "bardata" is used from the parent "charts.component.html" as data attribute.
  @Input() bardata;
  @Output() changedata= new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log("batdata", this.bardata);
  }
  changeBarData(){
    this.changedata.emit(null);
  }
}
