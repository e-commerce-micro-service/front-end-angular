import { User } from './../auth/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../service/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: User = new User();
  errorMessage: string = '';

  constructor(private registrationService: RegistrationService, private router: Router) { }

  ngOnInit() {
  }

}
