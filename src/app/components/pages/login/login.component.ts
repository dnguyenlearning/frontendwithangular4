import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { CannotContainSpace } from '../../../common/nospace.validators';
import { incorrectMailFormat } from '../../../common/formatemail.validators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  enableR:boolean=false;
  form=new FormGroup({
    username: new FormControl('',[Validators.required, CannotContainSpace]),
    password: new FormControl('',Validators.required)
  })
  
  constructor(
    private userService:UserService,
    private flashMsg:FlashMessagesService,
    private route:Router
  ) { }

  ngOnInit() {
  }

  onSubmit(rf){
    this.enableR=true;
    this.userService.authenticateUser(rf.value)
    .subscribe(data=>{
      if(data.success){
        this.userService.storeUserDate(data.token,data.user);
        this.flashMsg.show('You are Logged In',{ cssClass: 'alert-success',timeout: 3000})
        this.route.navigate(['/']);
      }else{
        this.flashMsg.show(data.msg,{ cssClass: 'alert-danger',timeout: 3000});
        this.route.navigate(['/login']);
      }
    })
  }

  get username(){
    return this.form.get('username');
  }
  get password(){
    return this.form.get('password');
  }
}
