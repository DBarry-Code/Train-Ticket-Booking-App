import { Component, inject, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IStation, ITrain, Search } from "../../model/train";
import { TrainService } from "../../service/train.service";
import { DatePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-search",
  standalone: true,
  imports: [DatePipe, FormsModule],
  templateUrl: "./search.component.html",
  styleUrl: "./search.component.scss",
})
export class SearchComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  trainService = inject(TrainService);
  trainList: ITrain[] = [];
  stationList: IStation[] = [];

  searchData: Search = new Search();

  constructor() {
    this.activatedRoute.params.subscribe((res: any) => {
      //debugger;
      this.searchData.fromStationId = res.fromStationId;
      this.searchData.toStationId = res.toStationId;
      this.searchData.dateOfTravel = res.dateOfTravel;
      this.getSearchTrains();
    });
  }

  ngOnInit(): void {
    this.loadAllStations();
  }

  loadAllStations() {
    this.trainService.getAllStations().subscribe((res: any) => {
      this.stationList = res.data;
    });
  }

  getSearchTrains() {
    this.trainService
      .getTrainsSerach(
        this.searchData.fromStationId,
        this.searchData.toStationId,
        this.searchData.dateOfTravel
      )
      .subscribe((res: any) => {
        //debugger;
        this.trainList = res.data;
      });
  }
}
