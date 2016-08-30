import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES} from '@angular/forms';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProfilePage} from '../profile/profile'
import {Control} from "@angular/common";

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/login/login.html',
  directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES]
})
export class LoginPage {
  private loginForm:FormGroup;
  private nav:NavController;
  profilePage=ProfilePage;

  constructor(fb: FormBuilder,public navCtrl: NavController) {
    this.loginForm = fb.group({
      email: ["", Validators.required,emailValidator],
      password: ["", Validators.required]
    });
  }
  doLogin(event) {
    //console.log(this.loginForm.value);
    console.log(99);
    console.log(event);
    if(this.loginForm.valid){
      this.navCtrl.push(ProfilePage);
    }
  }

}

function emailValidator(control) {
  var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

  if (!EMAIL_REGEXP.test(control.value)) {
    return {invalidEmail: true};
  }
}

