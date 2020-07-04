import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  check = false;
  userId = null;
  email = null;
  password = null;

  ngOnInit(): void {
  }

  constructor() { }
  getAllUsers() {
      axios.get('https://speedplanneros.azurewebsites.net/api/users').then(
        response => {
          // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i].username === this.email &&
            response.data[i].password === this.password ||
            response.data[i].email === this.email &&
            response.data[i].password === this.password) {
            console.log('User Found');
            this.userId = response.data[i].id;
            console.log('User id:', this.userId);

            // router.push({path: `/inscription-process`}); cambiar por sintaxis de angular
            this.check = true;
            break;
          }
        }
        if (!this.check) {
          alert('Wrong username/password');
        }
      }
    );
  }
}
