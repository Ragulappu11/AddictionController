import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {
  fullName: string = '';
  age: number | undefined;
  addiction: string = '';
  addictionDetails: string = '';

  constructor(private apiService: ApiService) {}

  onSubmit() {
    const formData = {
      fullName: this.fullName,
      age: this.age,
      addiction: this.addiction,
      addictionDetails: this.addictionDetails
    };

    this.apiService.submitForm(formData).subscribe(
      (response) => {
        console.log('Form submitted successfully:', response);
        // Handle response or UI updates as needed
      },
      (error) => {
            console.error('Error submitting form:', error);
            // Handle error or show error messages
        }
    );
  }
}
