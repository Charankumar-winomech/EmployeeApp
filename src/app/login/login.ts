import { Component, OnInit, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Employee } from '../employee/employee';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink,FormsModule,Employee],
  standalone:true,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login  {

  userName:string='';
  passWord:string='';

  



  constructor(private router:Router)
  {

  }
  
 



  check()
  {
      if(this.userName==="Admin" && this.passWord==="123" || this.userName==="charan" && this.passWord==="123")
      {
      
        this.router.navigate(['/employee'],{
          state:{Name:this.userName}
        });
  
      }
      else{
        console.log('denied');
         alert('Access denied');
      }

  }


}
