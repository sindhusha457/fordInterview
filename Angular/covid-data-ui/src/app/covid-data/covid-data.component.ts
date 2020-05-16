import { Component, OnInit } from '@angular/core';
import { CovidDataService } from './covid-data.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-covid-data',
  templateUrl: './covid-data.component.html',
  styleUrls: ['./covid-data.component.css']
})

export class CovidDataComponent implements OnInit {
  selectedValue: string;
  public covidDataList;
  public stateCovidData;


  constructor(private covidDataService: CovidDataService) { }

  ngOnInit() {
    this.getUSCovidData();
    this.getCovidDataByState(this.selectedValue);
  }

  public getUSCovidData() {
    this.covidDataService.getUSCovidData().subscribe(
      data => { this.covidDataList = data },
      err => console.error(err),
      () => console.log('done loading data')
    );
  }

  public getCovidDataByState(selectedValue) {
    this.covidDataService.getUSCovidData().subscribe(
      data => { this.covidDataList = data },
      err => console.error(err),
      () => console.log('done loading data')
    );
  }

  public onStateChange() {
    this.getCovidDataByState(this.selectedValue);
  }
}