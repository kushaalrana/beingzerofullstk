import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(){
    //https://api.github.com/users write this or the down one in http.get('here')
    return  this.http.get('https://api.github.com/users?since=43180236');
  }
}
