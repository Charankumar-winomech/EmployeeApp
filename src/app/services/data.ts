import { Injectable } from '@angular/core';
import { Datas } from '../model/Datas';
@Injectable({
  providedIn: 'root',
})
export class Data {



//   EmployeeDatas:Array<Datas> =[
//   { "id": 1, "name": "Arun Kumar", "age": 25, "department": "Engineering" },
//   { "id": 2, "name": "Priya Sharma", "age": 28, "department": "HR" },
//   { "id": 3, "name": "Rahul Verma", "age": 32, "department": "Finance" },
//   { "id": 4, "name": "Sneha Iyer", "age": 26, "department": "Marketing" },
//   { "id": 5, "name": "Vikram Singh", "age": 35, "department": "Engineering" },
//   { "id": 6, "name": "Anjali Mehta", "age": 29, "department": "Sales" },
//   { "id": 7, "name": "Karthik Reddy", "age": 31, "department": "Engineering" },
//   { "id": 8, "name": "Neha Gupta", "age": 27, "department": "HR" },
//   { "id": 9, "name": "Rohit Das", "age": 34, "department": "Finance" },
//   { "id": 10, "name": "Divya Nair", "age": 30, "department": "Marketing" },
//   { "id": 11, "name": "Suresh Babu", "age": 36, "department": "Operations" },
//   { "id": 12, "name": "Pooja Kulkarni", "age": 24, "department": "Sales" },
//   { "id": 13, "name": "Manoj Patel", "age": 33, "department": "Engineering" },
//   { "id": 14, "name": "Aisha Khan", "age": 28, "department": "HR" },
//   { "id": 15, "name": "Naveen Joshi", "age": 37, "department": "Finance" },
//   { "id": 16, "name": "Meera Pillai", "age": 26, "department": "Marketing" },
//   { "id": 17, "name": "Deepak Yadav", "age": 31, "department": "Operations" },
//   { "id": 18, "name": "Kavya Menon", "age": 29, "department": "Sales" },
//   { "id": 19, "name": "Harish Chandra", "age": 38, "department": "Engineering" },
//   { "id": 20, "name": "Lakshmi Narayanan", "age": 27, "department": "HR" }
// ]

EmployeeDatas:Array<Datas> =[
  {
    "empCode": "EMP001",
    "name": "Arun Kumar",
    "department": "Engineering",
    "assignedRoles": ["Software Engineer", "UI Designer"],
    "joiningDate": "2021-06-15"
  },
  {
    "empCode": "EMP002",
    "name": "Priya Sharma",
    "department": "HR",
    "assignedRoles": ["HR Manager", "Recruitment Specialist"],
    "joiningDate": "2020-03-10"
  },
  {
    "empCode": "EMP003",
    "name": "Rahul Verma",
    "department": "Finance",
    "assignedRoles": ["Financial Analyst", "Budget Planner"],
    "joiningDate": "2019-11-25"
  },
  {
    "empCode": "EMP004",
    "name": "Sneha Iyer",
    "department": "Marketing",
    "assignedRoles": ["Marketing Designer", "Content Creator"],
    "joiningDate": "2022-01-12"
  },
  {
    "empCode": "EMP005",
    "name": "Vikram Singh",
    "department": "Engineering",
    "assignedRoles": ["Tech Lead", "System Architect"],
    "joiningDate": "2018-07-19"
  },
  {
    "empCode": "EMP006",
    "name": "Anjali Mehta",
    "department": "Sales",
    "assignedRoles": ["Sales Executive", "Client Manager"],
    "joiningDate": "2021-09-05"
  },
  {
    "empCode": "EMP007",
    "name": "Karthik Reddy",
    "department": "Engineering",
    "assignedRoles": ["Backend Developer", "API Developer"],
    "joiningDate": "2020-12-22"
  },
  {
    "empCode": "EMP008",
    "name": "Neha Gupta",
    "department": "HR",
    "assignedRoles": ["Recruiter", "HR Coordinator"],
    "joiningDate": "2022-04-18"
  },
  {
    "empCode": "EMP009",
    "name": "Rohit Das",
    "department": "Finance",
    "assignedRoles": ["Accountant", "Tax Consultant"],
    "joiningDate": "2019-08-30"
  },
  {
    "empCode": "EMP010",
    "name": "Divya Nair",
    "department": "Marketing",
    "assignedRoles": ["Content Strategist", "SEO Specialist"],
    "joiningDate": "2021-02-14"
  },
  {
    "empCode": "EMP011",
    "name": "Suresh Babu",
    "department": "Operations",
    "assignedRoles": ["Operations Manager", "Process Supervisor"],
    "joiningDate": "2017-05-09"
  },
  {
    "empCode": "EMP012",
    "name": "Pooja Kulkarni",
    "department": "Sales",
    "assignedRoles": ["Sales Associate", "Lead Generator"],
    "joiningDate": "2023-06-01"
  },
  {
    "empCode": "EMP013",
    "name": "Manoj Patel",
    "department": "Engineering",
    "assignedRoles": ["DevOps Engineer", "Cloud Engineer"],
    "joiningDate": "2018-10-11"
  },
  {
    "empCode": "EMP014",
    "name": "Aisha Khan",
    "department": "HR",
    "assignedRoles": ["HR Coordinator", "Employee Relations"],
    "joiningDate": "2021-07-27"
  },
  {
    "empCode": "EMP015",
    "name": "Naveen Joshi",
    "department": "Finance",
    "assignedRoles": ["Finance Manager", "Risk Analyst"],
    "joiningDate": "2016-03-03"
  },
  {
    "empCode": "EMP016",
    "name": "Meera Pillai",
    "department": "Marketing",
    "assignedRoles": ["UI/UX Designer", "Brand Strategist"],
    "joiningDate": "2022-09-21"
  },
  {
    "empCode": "EMP017",
    "name": "Deepak Yadav",
    "department": "Operations",
    "assignedRoles": ["Process Analyst", "Quality Controller"],
    "joiningDate": "2020-06-30"
  },
  {
    "empCode": "EMP018",
    "name": "Kavya Menon",
    "department": "Sales",
    "assignedRoles": ["Business Development", "Account Manager"],
    "joiningDate": "2021-11-08"
  },
  {
    "empCode": "EMP019",
    "name": "Harish Chandra",
    "department": "Engineering",
    "assignedRoles": ["Engineering Manager", "Project Lead"],
    "joiningDate": "2015-12-17"
  },
  {
    "empCode": "EMP020",
    "name": "Lakshmi Narayanan",
    "department": "HR",
    "assignedRoles": ["Talent Specialist", "Training Coordinator"],
    "joiningDate": "2022-08-04"
  }

]
}
