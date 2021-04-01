import { Component, OnInit } from '@angular/core';

interface ProjectClass {
  teamNumberD: number;
  teamNumberU: number;
  range: number;
  durationD: number;
  durationU: number;
  costD: number;
  costU: number;
  compli: number;
  risk: number;
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  projectClasses: ProjectClass[] = [
    {teamNumberD:1,teamNumberU:1,range:0,durationD:0,durationU:3,compli:0,risk:0,costD:0,costU:50,name: "Klasa I"},
    {teamNumberD:1,teamNumberU:3,range:0,durationD:4,durationU:7,compli:0,risk:0,costD:0,costU:100,name: "Klasa II"},
    {teamNumberD:3,teamNumberU:10,range:1,durationD:7,durationU:24,compli:1,risk:0,costD:100,costU:1000,name: "Klasa III"},
    {teamNumberD:10,teamNumberU:50,range:1,durationD:24,durationU:52,compli:1,risk:1,costD:1000,costU:10000,name: "Klasa IV"},
    {teamNumberD:50,teamNumberU:150,range:2,durationD:52,durationU:156,compli:2,risk:1,costD:10000,costU:100000,name: "Klasa V"},
    {teamNumberD:150,teamNumberU:200,range:2,durationD:7,durationU:24,compli:3,risk:1,costD:100000,costU:1000000,name: "Klasa VI"},
  ];
  amount: any = 100;
  range: string[] = ["mały","średni","duży","bardzo duży"]
  compRange: string[] = ["mały","średni","duży", "bardzo duży"]
  compRangeNumber: any = 2;
  riskRange: string[] = ["niskie","średnie","wysokie"]
  riskRangeNumber: any = 1;
  rangeNumber: any = 2;
  time: any = 130;
  timeUnit: string = "lat";
  timeValue: any = 2.5;
  cost: any = 50;
  costValue = 50;
  unit: any = "tys";
  result: any ="";
  ngOnInit(): void {
  }
  calc(): void {
    let c = this.cost/1000;
    if(c>1) {
      this.costValue = this.cost/1000;
      this.unit = "mln";
    } else {
      this.unit = "tys";
      this.costValue = this.cost;
    }
  }

  timeUnitCalc(): void {
    if(this.time > 52) {
      this.timeValue = this.time / 52;
      this.timeValue = this.timeValue.toPrecision(2);
      this.timeUnit = "lat."
    }else if(this.time > 4) {
      this.timeValue = this.time / 4;
      this.timeUnit = "mies."
    } else {
      this.timeValue = this.time;
      this.timeUnit = "tyg.";
    }
  }

  matchProject(): void {
    let selectedProject = "";
    let bestPoints = 0;
    this.projectClasses.forEach(x => {
      let points = 0;
      if(this.cost<=x.costU && this.cost>=x.costD) points++;
      if(this.rangeNumber == x.range) points ++;
      if(this.riskRangeNumber == x.risk) points++;
      if(this.compRangeNumber == x.compli) points++;
      if(this.amount<=x.teamNumberU && this.amount>=x.teamNumberD) points++;
      if(this.time<=x.durationU && this.time>=x.durationD) points++;
      if(bestPoints<points) {
        selectedProject = x.name;
        bestPoints = points;
      }
    })
    this.result = "Wynik: " + selectedProject;
  }
}
