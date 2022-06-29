import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  users : Array<any> = [];
  id : string = "1";
  constructor(private user : UserService) {
    this.users = this.user.getData();
   }

  details(id:any){
    this.id = id;
  }
  ngOnInit(): void {
  }

}
