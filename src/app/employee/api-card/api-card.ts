import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-api-card',
  imports: [],
  templateUrl: './api-card.html',
  styleUrl: './api-card.css',
})
export class ApiCard {
  @Input() name: string = '';
  @Input() id: string = '';
  @Input() salary: string = '';
  @Input() age: string = '';
}
