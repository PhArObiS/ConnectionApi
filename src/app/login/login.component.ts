import { Component } from '@angular/core';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(public security:SecurityService) { }

  username:string="";
  password:string="";

}
