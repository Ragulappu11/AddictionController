import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private containerData: any = {};
  private rangeData: any = {};
  result: any;

  setContainerData(data: any) {
    this.containerData = data;
  }

  setRangeData(data: any) {
    this.rangeData = data;
  }
 
  getCombinedData() {
    return { ...this.containerData, ...this.rangeData };
  }

  setResult(result: any) {
    this.result = result;
  }

  getResult(): any {
    return this.result;
  }
}
