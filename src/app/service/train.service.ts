import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TrainService {
  apiURl: string = "https://freeapi.miniprojectideas.com/api/TrainApp/";
  constructor(private http: HttpClient) {}

  getAllStations() {
    return this.http.get(`${this.apiURl}GetAllStations`);
  }

  getTrainsSerach(from: number, to: number, date: string) {
    return this.http.get(
      `${this.apiURl}GetTrainsBetweenStations?departureStationId=${from}&arrivalStationId=${to}&departureDate=${date}`
    );
  }
}
