import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  login(email: string, password: string) {
    if(email == "joseph@gmail.com" && password == "1234")
    {
      this.router.navigate(["home"]);
    }
    else {
      alert("Incorrect Credentials");
      console.log("Nagkamali ka ng susi");
    }

  }
}
