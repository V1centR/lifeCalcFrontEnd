import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import {LoginExecService} from '../login-exec.service';

@Component({
  selector: 'app-login-home',
  templateUrl: './login-home.component.html',
  styleUrls: ['./login-home.component.scss']
})

export class LoginHomeComponent implements OnInit {
  
    
  loginForm: FormGroup;
  testName: string;
    
  constructor() {
  }

  ngOnInit(){
      
  }

  submit(){
    this.testName = "Var setup OK!";
      
    alert("Login:: " + this.loginForm.controls.login.value);
    console.log("Login:: " + this.loginForm.controls.login.value);
    console.log("Form Submited:: OK");
    return false;
  }

}
