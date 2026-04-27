import { Injectable } from '@angular/core';
import { Datas } from '../model/Datas';
@Injectable({
  providedIn: 'root',
})
export class Data {



  EmployeeDatas:Array<Datas> =[
  { "id": 1, "name": "Arun Kumar", "age": 28, "department": "Engineering" },
  { "id": 2, "name": "Priya Sharma", "age": 32, "department": "Human Resources" },
  { "id": 3, "name": "Rahul Verma", "age": 26, "department": "Marketing" },
  { "id": 4, "name": "Sneha Iyer", "age": 30, "department": "Finance" },
  { "id": 5, "name": "Vikram Singh", "age": 35, "department": "Operations" }
]


}
