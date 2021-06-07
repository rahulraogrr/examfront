import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2';

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

    //create user
    this.userService.createUser(this.user).subscribe(
        (data: any)=>{
          Swal.fire('Member Successfully Registered', 
          'Please Note Member ID for future reference : '+data.id,'success');
        },
        (error)=>{
          Swal.fire('Member Registration Failed','','error');
        }
    );

  }

  ngOnInit(): void {
  }

}