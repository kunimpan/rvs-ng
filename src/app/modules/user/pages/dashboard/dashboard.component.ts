import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  typeChart: any;
  dataChart: any;
  optionsChart: any;

  typeChart2: any;
  dataChart2: any;
  optionsChart2: any;

  typeChart3: any;
  dataChart3: any;
  optionsChart3: any;

  constructor() { }

  ngOnInit(): void {
    this.typeChart = 'bar';   ////// สามารถกำหนดเป็น 'line','bar','radar','pie','doughnut','polarArea','bubble','scatter'
    this.dataChart = {
      labels: ["ยังไม่ได้ฉีด", "เข็มที่ 1", "เข็มที่ 2", "เข็มที่ 3"],
      datasets: [
        {
          label: "จำนวนฉีดวันนี้",
          data: [0, 5, 10, 15],
          backgroundColor : ['#1abc9c', '#3498db', '#9b59b6', '#bdc3c7', '#f39c12']
        }
      ]
    };
    this.optionsChart = {
      responsive: true,
      maintainAspectRatio: false,
      pieceLabel: {
        render: 'value', // สามารถเปลี่ยนการตั้งค่าตามต้องการได้ 'value','label','percentage'
        fontSize: 20,
        fontStyle: 'bold',
        fontColor: '#FFF',
        fontFamily: '"Prompt"'
      },
    };

    this.typeChart2 = 'line';   ////// สามารถกำหนดเป็น 'line','bar','radar','pie','doughnut','polarArea','bubble','scatter'
    this.dataChart2 = {
      labels: ["จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์", "อาทิตย์"],
      datasets: [
        {
          label: "จำนวนผู้เข้าจองในแต่ละวัน",
          data: [10, 35, 30, 40, 70, 60, 50],
          backgroundColor : ['#9b59b6']
        }
      ]
    };
    this.optionsChart2 = {
      responsive: true,
      maintainAspectRatio: false,
      pieceLabel: {
        render: 'value', // สามารถเปลี่ยนการตั้งค่าตามต้องการได้ 'value','label','percentage'
        fontSize: 20,
        fontStyle: 'bold',
        fontColor: '#FFF',
        fontFamily: '"Prompt"'
      },
      
    };

    this.typeChart3 = 'doughnut';   
    ////// สามารถกำหนดเป็น 'line','bar','radar','pie','doughnut','polarArea','bubble','scatter'
    this.dataChart3 = {
      labels: ["Morderna", "Pfizer", "Astra", "Novavax", "Sinovac"],
      datasets: [
        {
          label: "My Stats Chart",
          data: [50, 40, 30, 20, 10],
          backgroundColor : ['#1abc9c', '#3498db', '#9b59b6', '#bdc3c7', '#f39c12']
        }
      ]
    };
    this.optionsChart3 = {
      responsive: true,
      maintainAspectRatio: false,
      pieceLabel: {
        render: 'percentage', // สามารถเปลี่ยนการตั้งค่าตามต้องการได้ 'value','label','percentage'
        fontSize: 20,
        fontStyle: 'bold',
        fontColor: '#FFF',
        fontFamily: '"Prompt"'
      },
    };
  }

}
