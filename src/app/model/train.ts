export interface IStation {
  stationID: number;
  stationName: string;
  stationCode: string;
}

export class Search {
  fromStationId: number;
  toStationId: number;
  dateOfTravel: string;

  constructor() {
    this.fromStationId = 0;
    this.toStationId = 0;
    this.dateOfTravel = "";
  }
}
