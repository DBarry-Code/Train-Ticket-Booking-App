import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Search } from "../../model/train";
import { TrainService } from "../../service/train.service";

@Component({
  selector: "app-search",
  standalone: true,
  imports: [],
  templateUrl: "./search.component.html",
  styleUrl: "./search.component.scss",
})
export class SearchComponent {
  activatedRoute = inject(ActivatedRoute);
  trainService = inject(TrainService);
  searchData: Search = new Search();

  constructor() {
    this.activatedRoute.params.subscribe((res: any) => {
      //debugger;
      this.searchData = res;
      this.getSearchTrains();
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
      });
  }
}
