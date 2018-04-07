import { Component, OnInit } from '@angular/core';
import { FormatFileSizePipe }  from './formatfileSize.pipe'

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  data:any;
  fileSizes: Array<any>;
  largeFileSize=100;
  constructor() {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'My Second dataset',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    }

    this.fileSizes = [10, 100, 1000, 10000, 100000, 10000000, 10000000000];
  }

  ngOnInit() {
  }

  changeBarDataFromParent(){
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [65, 90, 80, 81, 10, 55, 40]
        },
        {
          label: 'My Second dataset',
          backgroundColor: '#f0f0f0',
          borderColor: '#7CB342',
          data: [100, 52, 40, 19, 20, 27, 90]
        }
      ]
    }
  }

}
