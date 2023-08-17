import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  addictionDetails: string = '';
  router: any;
  result: any;

  speak(): void {
    const message = new SpeechSynthesisUtterance(this.addictionDetails);
    window.speechSynthesis.speak(message);

}
}
