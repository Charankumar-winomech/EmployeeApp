import { Component, inject, Input, input, OnInit, Pipe, signal } from '@angular/core';
import { Data } from '../services/data';
import { Datas } from '../model/Datas';
import { FilterPipe } from '../pipes/filter-pipe';
import { FormsModule } from '@angular/forms';
import { Card } from './card/card';
import { Login } from '../login/login';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-employee',
  imports: [FilterPipe,FormsModule,Card,RouterModule,MatIconModule,MatExpansionModule],
  standalone:true,
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee implements OnInit{

   Empservice = inject(Data);
// @Input userName:string='';
Employees: Datas[] = [];
userName:string|undefined;
 searchTerm=signal('');


ngOnInit(): void {
  this.Employees = this.Empservice.EmployeeDatas;

 
}

constructor(private router:Router)
{
  const Name= this.router.getCurrentNavigation();
  this.userName=Name?.extras.state?.['Name'];
}


sortOrder:string='';

onSortChange(value:string)
{
  if(value==='ascending')
  {
    this.sortAtoZ();
  }
  else if(value==='descending'){
    this.sortZtoA();
  }
}

signOut()
{
  console.log('clicked')
    this.router.navigate(['']);
}


sortAtoZ()
{
  return this.Employees.sort((a,b)=>{
    return a.name.localeCompare(b.name);
  })
}
sortZtoA()
{
  return this.Employees.sort((a,b)=>{
    return b.name.localeCompare(a.name);
  })
}


}
