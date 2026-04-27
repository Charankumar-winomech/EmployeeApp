import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Employee } from '../employee/employee';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink,Employee,FormsModule,RouterOutlet],
  standalone:true,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  userName:string='';
  passWord:string='';


  constructor(private router:Router)
  {

  }
  
  check()
  {
      if(this.userName==="Admin" && this.passWord==="123")
      {
        console.log('granted')
        this.router.navigate(['/employee']);
      }
      else{
        console.log('denied');
        // alert('denied permission')
      }

  }


}
