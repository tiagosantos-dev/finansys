import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'

import { faEnvelope,faLock } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  faEnvelope = faEnvelope;
  faLock = faLock;
  formUser : FormGroup;
  constructor(private fb:FormBuilder, private router :Router) { }

  ngOnInit(): void {
    this.formBuid();
    console.log("Iniciado")
  }

 formBuid(){
  this.formUser = this.fb.group({
    login:[null, [Validators.required, Validators.minLength(5)]],
    password:[null, [Validators.required, Validators.minLength(8)]]
    })
  }

  submitForm(){
   let user = this.formUser.value;
    if(user.login == 'admin' && user.password == 'admin'){
      window.localStorage.setItem('token', 'dfsdfsdfsdg645f4sd66g4sdg46s4d6gf54ds6gvc47b6xb43f54g9+sd47g64')
      this.router.navigate([''])

    }


  }

}
