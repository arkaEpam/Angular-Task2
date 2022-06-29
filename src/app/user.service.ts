import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public data : User[];

  constructor() { 
    this.data = [
      {
        id: "1",
        firstName : "Arka",
        lastName : "Choudhury",
        age : 22,
        login : "arklogin",
        password : "random123",
        isDeleted : false
      },
      {
        id: "2",
        firstName : "ritam",
        lastName : "nandi",
        age : 25,
        login : "ritlogin",
        password : "random123!!!",
        isDeleted : false
      },
      {
        id: "3",
        firstName : "Snigdha",
        lastName : "Roy",
        age : 22,
        login : "snilogin",
        password : "random123Not",
        isDeleted : false
      },
      {
        id: "4",
        firstName : "bubai",
        lastName : "mondal",
        age : 22,
        login : "bubailogin",
        password : "random123Not",
        isDeleted : true
      },
      {
        id: "5",
        firstName : "monbir",
        lastName : "saren",
        age : 22,
        login : "manbirlogin",
        password : "random123Not",
        isDeleted : false
      },
      {
        id: "6",
        firstName : "Sristi",
        lastName : "Pal",
        age : 22,
        login : "snilogin",
        password : "random123Not",
        isDeleted : true
      },
      {
        id: "7",
        firstName : "Suvojit",
        lastName : "Sen",
        age : 22,
        login : "snilogin",
        password : "random123Not",
        isDeleted : false
      },
      {
        id: "8",
        firstName : "Hitesh",
        lastName : "Chaturdevi",
        age : 22,
        login : "snilogin",
        password : "random123Not",
        isDeleted : false
      }
    ]
  }

  getData(){
    return this.data;
  }
  deleteUser(id : string){
    this.data.find((user)=>{
      if(user.id === id){
        user.isDeleted = true;
      }
    })
  }

  activateUser(id : string){
    this.data.find((user)=>{
      if(user.id === id){
        user.isDeleted = false;
      }
    })
  }
}
interface User{
  id: string,
  firstName : string,
  lastName : string,
  age : number,
  login : string,
  password : string,
  isDeleted : boolean
}