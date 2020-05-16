import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const US_API_URL = "http://localhost:8080/api/v1/covidResults";
const STATE_API_URL = "http://localhost:8080/api/v1/covidResults/states/";

@Injectable({
  providedIn: 'root'
})
export class CovidDataService {

  constructor(private http: HttpClient) { }

  // Uses http.get() to load data from a single API endpoint
  public getUSCovidData() {
    return this.http.get(US_API_URL);
  }

  public getCovidDataByState(stateCode) {
    return this.http.get(STATE_API_URL + stateCode);
  }
}