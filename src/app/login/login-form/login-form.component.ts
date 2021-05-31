import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

    /** Login form group. */
    loginForm: FormGroup;
    /** Password input field type. */
    passwordInputType: string;
    /** True if loading. */
    loading = false;

  
    /**
   * @param {FormBuilder} formBuilder Form Builder.
   * 
   */

     constructor(private formBuilder: FormBuilder,) {  }
  
 /**
   * Creates login form.
   *
   * Initializes password input field type.
   */
  ngOnInit() {
    this.createLoginForm();
    this.passwordInputType = 'password';
  }


  /**
   * Creates login form.
   */
   private createLoginForm() {
    this.loginForm = this.formBuilder.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required],
      'remember': false
    });
  }

}
