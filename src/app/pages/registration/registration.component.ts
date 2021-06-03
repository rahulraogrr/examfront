import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  email = new FormControl('', [Validators.required, Validators.email]);
  user = new User('','','','','','','');

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  registerUser(){
    alert('Registration Started');
    console.log(this.user);

    //create user
    this.userService.createUser(this.user).subscribe(
        (data)=>{
          //Success
          console.log(data);
          alert(data);
        },
        (error)=>{
          //Error
          console.log(error);
          alert(error);
        }
    );

  }

  ngOnInit(): void {
  }

}