import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {
  fullName: string = '';
  age: number | null = null;
  addiction: string = '';
  addictionDetails: string = '';  
  //constructor(private apiService: ApiService) {}
  
  constructor(private sharedDataService: SharedDataService,
    private router: Router) {}

  //onSubmit() {
    //const formData = {
      //fullName: this.fullName,
      //age: this.age,
      //addiction: this.addiction,
      //addictionDetails: this.addictionDetails
    //};

    onSubmit() : void {
      //console.log('Full Name:', this.fullName),
      //console.log('Age:', this.age),
      //console.log('Addiction:', this.addiction);
      //console.log('Addiction Details:', this.addictionDetails);
      const containerData = {
        fullName: this.fullName,
        age: this.age,
        addiction: this.addiction,
        addictionDetails:this.addictionDetails
      }

      this.sharedDataService.setContainerData(containerData)
        this.router.navigate(['/range']);


      //console.log('Container Data:', containerData);


    
    //this.apiService.submitForm(FormData).subscribe(
      //(response: any) => { 
        //console.log('Form submitted successfully:', response);
        //this.router.navigate(['../range']);
        // Handle response or UI updates as needed
      //},
      //(error: any) => {
       // console.error('Error submitting form:', error);
        // Handle error or show error messages
      //}
    };
  }
