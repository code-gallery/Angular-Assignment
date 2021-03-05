import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prime-chart',
  templateUrl: './prime-chart.component.html',
  styleUrls: ['./prime-chart.component.css']
})
export class PrimeChartComponent {

  data: any;

    constructor() {
        this.data = {
            labels: ['April','May','June'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]    
            };
    }

}
