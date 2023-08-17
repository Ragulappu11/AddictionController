import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss']
})
export class rangeComponent {
  PO3: string = '';
  PO4: string = '';
  F6: string = '';
  C4: string = '';
  CP4: string = '';
  apiservice: any;
 // router: any;
  onSumbmit: any;
  onsumbmit: any;

constructor(
  private sharedDataservice: SharedDataService,
  private apiSerivice: ApiService,
  private router: Router) {}

onSave() : void {
  const rangeData = {
    PO3: this.PO3,
    PO4: this.PO4,
    F6: this.F6,
    C4: this.C4,
    CP4: this.CP4
  }

    this.sharedDataservice.setRangeData(rangeData)
    this.router.navigate(['/result']);

    const combinedData = this.sharedDataservice.getCombinedData();
    console.log('combined Data', combinedData); 
    
    // Send the combined data to the backend using the ApiService
    this.apiservice.sendCombinedData(combinedData).subscribe(
      (response: any) => {
        console.log('Combined data sent to backend:', response);
        // You can handle success responses here
      },
      (error: any) => {
        console.error('Error sending data to backend:', error);
        // You can handle error responses here
      }
    );


    //console.log('Range Data:', rangeData);

    //this.sharedDataservice.setRangeData(formData)

   // this.onSubmit() ; void {
        // Handle form submission logic if needed
    //}
//}onSubmit() {
        // throw new Error('Method not implemented.');
    //}

}

}
