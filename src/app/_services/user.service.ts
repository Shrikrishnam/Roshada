import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new Headers({ "Content-Type": "application/json" })
};

@Injectable({ providedIn: 'root' })
export class UserService {

    public static BaseUrl = "http://localhost:6565/";

    constructor(private http: Http) { }
    postfitnessdata(data) {
      console.log(data);
      return this.http
        .post(UserService.BaseUrl + "allfriends", data, httpOptions)
        .pipe(map((response: Response) => response.json()));
    }
  
    postcontactdata(data) {
      console.log(data);
      return this.http
        .post(UserService.BaseUrl + "contacts", data, httpOptions)
        .pipe(map((response: Response) => response.json()));
    }
  
    getfitnessdata() {
      return this.http
        .get(UserService.BaseUrl + "allfriends", httpOptions)
        .pipe(map((response: Response) => response.json()));
    }
    deletefinessdata(id) {
      return this.http.delete(
        UserService.BaseUrl + "allfriends" + "/" + id,
        httpOptions
      );
    }
    getoneuser(id: number) {
      // console.log(id);
      return this.http
        .get(`${UserService.BaseUrl}allfriends/${id}`)
        .pipe(map((response: Response) => response.json()));
    }
    patchdata(user) {
      return this.http.patch(
        UserService.BaseUrl + "allfriends" + "/" + user.id,
        user
      );
    }

    

}