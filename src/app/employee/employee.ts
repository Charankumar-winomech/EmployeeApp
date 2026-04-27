import { Component, inject, OnInit, Pipe, signal } from '@angular/core';
import { Data } from '../services/data';
import { Datas } from '../model/Datas';
import { FilterPipe } from '../pipes/filter-pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  imports: [FilterPipe,FormsModule],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee implements OnInit{

   Empservice = inject(Data);

Employees: Datas[] = [];

 searchTerm=signal('');

ngOnInit(): void {
  this.Employees = this.Empservice.EmployeeDatas;
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
