import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PhonesResponse } from '../models/phonesResponse';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PhonesService {
  url = "https://dummyjson.com/products"
  constructor(private http: HttpClient) { }

  getData(): Observable<PhonesResponse>{
    
    return this.http.get<PhonesResponse>(this.url);
  }
}
