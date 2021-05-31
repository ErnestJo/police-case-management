import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


   /** Login form group. */
   loginForm: FormGroup;
   /** Password input field type. */
   passwordInputType: string;
   /** True if loading. */
   loading = false;
 
  

  constructor(private formBuilder: FormBuilder ) { }

  ngOnInit(): void {

    this.createLoginForm();
    this.passwordInputType = 'password';
  }


  login() {
    
  }

  private createLoginForm() {
    this.loginForm = this.formBuilder.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required],
      'remember': false
    });
  }

}
