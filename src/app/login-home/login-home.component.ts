import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, NgForm} from '@angular/forms';
import { Observable } from 'rxjs';
import {LoginExecService} from '../login-exec.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-home',
  templateUrl: './login-home.component.html',
  styleUrls: ['./login-home.component.scss']
})

export class LoginHomeComponent implements OnInit {
  
    
  //loginForm: FormGroup;
  testName: string;
  emailLogin: string;
  loginForm: NgForm;
    
  constructor(private route: Router) {
  }

  ngOnInit(){
      
  }

  execLogin(){
  
    console.log("Login:: " + this.emailLogin);
    console.log("Form Submited:: OK");

    this.route.navigate(['home']);
    return false;
  }

}
