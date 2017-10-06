import { Injectable } from '@angular/core';
import {Http ,Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {

  constructor(private http: Http) { }

  checkUsernameExist(username:String){
    return this.http.get('http://localhost:3100/users/'+username)
      .map(res=>res.json())
  }
  checkEmailExist(email:String){
    return this.http.get('http://localhost:3100/users/'+email)
      .map(res=>res.json())
  }

  registerUser(newUser){
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3100/users/register',newUser,{headers:headers})
      .map(res=>res.json());
  }

  authenticateUser(user){
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3100/users/authenticate',user,{headers:headers})
      .map(res=>res.json());
  }

}
