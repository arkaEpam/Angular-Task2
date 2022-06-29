import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users : Array<any> = [];
  type: boolean = false;
  constructor(private user : UserService, private router: Router ) {
    this.users = this.user.getData();
   }


  deleteUser(id : any){
    this.user.deleteUser(id);
  }
  activateUser(id : any){
    this.user.activateUser(id);
  }

  hasRoute(route : string){
    return this.router.url.includes(route);
  }

  ngOnInit(): void {
  }

}
