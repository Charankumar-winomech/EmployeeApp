import { Component, Input, input } from '@angular/core';


@Component({
  selector: 'app-card',
   standalone:true,
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {

    @Input()  name:string='';
     @Input()  department:string='';
      @Input()  empCode:string='';
       @Input()  joiningDate:string='';
       @Input() assignedRoles:string[]=[];

}
